import { getCookie } from "helpers/cookies";
import jwt from "jsonwebtoken";
import { serverCfg } from "config/serverCfg";
import Account from "models/Account";

const passport_jwt = (cb: any) => {
  return async (params: any, request: any) => {
    const cookies = request.headers.get("cookie");
    const userToken = getCookie("token", cookies);

    try {
      if (!userToken) throw "No logged"

      const verify = jwt.verify(userToken, serverCfg.JWT_SECRET) as { id: number }

      const user = await Account.findOne({
        where: {
          id: verify.id
        }
      });

      if (!user) {
        return new Response(
          JSON.stringify({ message: "Account not found :(" }),
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
      }

      request.user = user.get();

      return await cb(params, request)
    }

    catch(e) {
      console.log(e);
      console.log("passport_jwt() Error");
      return new Response(
        JSON.stringify({ message: "No logged" }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    }
  }
};

export default passport_jwt;