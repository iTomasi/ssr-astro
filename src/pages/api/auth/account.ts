import passport_jwt from "passport_custom/passport_jwt";
import { zodEditAccount } from "helpers/validations/authentication";
import Account from "models/Account";
import generateOgCard from "libs/generateOgCard";

export const put = passport_jwt(async (params: any, request: any) => {
  const body = await request.json();

  try {
    const payload = zodEditAccount.parse(body);
    const user = request.user;

    if (payload.username.toLowerCase() !== user.username_lower) {
      const existsUser = await Account.findOne({
        where: {
          username_lower: payload.username.toLowerCase()
        }
      });

      if (existsUser) {
        return new Response(
          JSON.stringify({ message: "Username already taked" }),
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
      }
    }

    const { error, data } = await generateOgCard({
      username: payload.username,
      full_name: payload.full_name,
      profile_picture: payload.profile_picture
    });

    if (error) {
      return new Response(
        JSON.stringify({ message: error }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    }

    else if (!data) {
      return new Response(
        JSON.stringify({ message: "whut? xD" }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    }

    await Account.update(
      {
        ...payload,
        username_lower: payload.username.toLowerCase(),
        og_img: data
      },
      {
        where: {
          id: user.id
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
    console.log(e);
    console.log("api/auth/account.ts put error");
    return new Response(
      JSON.stringify({ message: "Error" }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }
})