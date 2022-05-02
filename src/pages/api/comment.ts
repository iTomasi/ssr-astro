import passport_jwt from "passport_custom/passport_jwt";
import { zodComment } from "helpers/validations/comment";
import Comment from "models/Comment";

export const post = passport_jwt(async (params: any, request: any) => {
  const body = await request.json();

  try {
    const payload = zodComment.parse(body);

    await Comment.create({
      profile_id: payload.profile_id,
      user_id: request.user.id,
      message: payload.message,
    })

    return new Response(
      JSON.stringify({ message: "OK" }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }

  catch(e: any) {
    if (e?.name === "ZodError") {
      return new Response(
        JSON.stringify({ message: e.issues[0].message }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    }

    console.error(e);
    console.error("api/comment.ts post method error");
    return new Response(
      JSON.stringify({ message: "Server Internal Error" }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }
})