import passport_jwt from "passport_custom/passport_jwt";
import Account from "models/Account";

export const post = passport_jwt(async (params: any, request: any) => {
  const { user_id } = await request.json();

  if (typeof user_id !== "number") {
    return new Response(
      JSON.stringify({ message: "user_id should be a number" }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }

  const user = request.user;

  if (user.id === user_id) {
    return new Response(
      JSON.stringify({ message: "Can't follow yourself" }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }

  try {
    const theUser = await Account.findOne({
      where: {
        id: user_id
      }
    });

    if (!theUser) {
      return new Response(
        JSON.stringify({ message: "User not found" }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    }

    let followers: Array<number> = theUser.getDataValue("followers") || [];

    if (followers.includes(user.id)) {
      const filter = followers.filter((id) => id !== user.id);

      followers = filter
    }

    else {
      followers.push(user.id)
    }

    await Account.update(
      {
        followers
      },
      {
        where: {
          id: user_id
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
    console.error("api/follower.ts error")
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