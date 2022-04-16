import { zodSignUp } from "helpers/validations/authentication";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serverCfg } from "config/serverCfg";

// Model
import Account from "models/Account"

export const post = async (params: any, request: any) => {
  const body = await request.json();

  try {
    const payload = zodSignUp.parse(body)

    const existsUser = await Account.findOne({
      where: {
        username_lower: payload.username.toLowerCase()
      }
    });

    if (existsUser) {
      return new Response(
        JSON.stringify({ message: "Username already exists" }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(payload.password, salt);

    const user = await Account.create({
      full_name: payload.full_name,
      username: payload.username,
      username_lower: payload.username.toLowerCase(),
      password: hash
    });

    const token = jwt.sign(
      {
        id: user.getDataValue("id")
      },
      serverCfg.JWT_SECRET,
      {
        expiresIn: 86400
      }
    )

    return new Response(
      JSON.stringify({ message: "OK", data: { token } }),
      {
        headers: {
          "Content-Type": "application/json"
        },
        status: 200
      }
    )
  }

  catch(e: any) {
    //console.log(e);
    //console.log("sign-up post api error")
    let message = "Server Error"

    if (e.name === "ZodError") {
      message = e.issues[0].message
    }

    else {
      console.log(e)
    }

    return new Response(
      JSON.stringify({
        message,
        e
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }
}