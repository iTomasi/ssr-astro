import { zodSignIn } from "helpers/validations/authentication";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Model
import Account from "models/Account";

// Config
import { serverCfg } from "config/serverCfg"

export const post = async (params: any, request: any) => {
  const body = await request.json();

  try {
    const payload = zodSignIn.parse(body);

    const user = await Account.findOne({
      where: {
        username: payload.username
      }
    })

    if (!user) {
      return new Response(
        JSON.stringify({ message: "Username or password incorrect" }),
        {
          headers: {
            "Content-Type": "application/json"
          },
          status: 200
        }
      )
    }

    const compare = await bcrypt.compare(payload.password, user.getDataValue("password"));

    if (!compare) {
      return new Response(
        JSON.stringify({ message: "Username or password incorrect" }),
        {
          headers: {
            "Content-Type": "application/json"
          },
          status: 200
        }
      )
    }

    const token = jwt.sign(
      {
        id: user.getDataValue("id")
      },
      serverCfg.JWT_SECRET,
      {
        expiresIn: 86400
      }
    );

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
    let message: string = "Server Internal Error";

    if (e.name === "ZodError") {
      message = e.issues[0].message
    }

    else {
      console.log(e);
      console.log("api/auth/sign-in.ts error")
    }

    return new Response(
      JSON.stringify({ message }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }
}