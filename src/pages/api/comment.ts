import passport_jwt from "passport_custom/passport_jwt";

export const post = passport_jwt(async (params: any, request: any) => {
  const body = await request.json();

  console.log(body)

  return new Response(
    JSON.stringify({ message: "PRO" }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
})