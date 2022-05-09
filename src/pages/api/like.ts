import passport_jwt from "passport_custom/passport_jwt";
import Comment from "models/Comment";

export const post = passport_jwt(async (params: any, request: any) => {
  const { comment_id } = await request.json();

  if (typeof comment_id !== "number") {
    return new Response(
      JSON.stringify({ message: "comment_id should be a number" }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }

  try {
    const comment = await Comment.findOne({
      where: {
        id: comment_id
      }
    })

    if (!comment) {
      return new Response(
        JSON.stringify({ message: "Comment not found :(" }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    }

    const user_id = request.user.id;
    let likes: Array<number> = comment.getDataValue("likes") || []

    if (likes.includes(user_id)) {
      likes = likes.filter((id) => id !== user_id);
    }

    else {
      likes.push(user_id)
    }

    await Comment.update(
      {
        likes
      },
      {
        where: {
          id: comment_id
        }
      }
    )

    return new Response(
      JSON.stringify({ message: "OK" }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }

  catch(e) {
    console.error(e);
    console.error("api/like.ts error");
    return new Response(
      JSON.stringify({ message: "Server Error" }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }
})