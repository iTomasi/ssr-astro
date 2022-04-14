import { zodSignUp } from "helpers/validations/authentication"

export const post = async (params: any, request: any) => {
  const body = await request.json();

  try {
    const a = zodSignUp.parse(body);

    console.log(a)

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
    console.log(e);
    console.log("sign-up post api error")
    let message = "Server Error"

    if (e.name === "ZodError") {
      message = e.issues[0].message
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