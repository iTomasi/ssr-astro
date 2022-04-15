import { zodSignUp } from "helpers/validations/authentication";
import connectPostgres from "databases/functions/connectPostgres"

export const post = async (params: any, request: any) => {
  const body = await request.json();

  try {
    zodSignUp.parse(body);

    await connectPostgres();

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