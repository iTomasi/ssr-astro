import { zodSignUp } from "helpers/validations/authentication";
import connectPostgres from "databases/functions/connectPostgres"
import bcrypt from "bcryptjs";

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

    await Account.create({
      full_name: payload.full_name,
      username: payload.username,
      username_lower: payload.username.toLowerCase(),
      password: hash
    })

    return new Response(
      JSON.stringify({ message: "OK" }),
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