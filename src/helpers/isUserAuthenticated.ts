import { AstroGlobal } from "astro";
import { getCookie } from "./cookies";
import jwt from "jsonwebtoken";
import Account from "models/Account";
import { serverCfg } from "config/serverCfg"
import connectPostgres from "databases/functions/connectPostgres"

const isUserAuthenticated = async (Astro: AstroGlobal) => {
  const cookies = Astro.request.headers.get("cookie");
  if (!cookies) return false

  const token = getCookie("token", cookies)
  if (!token) return false

  try {
    const verify = jwt.verify(token, serverCfg.JWT_SECRET) as { id: number }

    //await connectPostgres()

    const user = await Account.scope("sensitiveData").findOne({
      where: {
        id: verify.id
      }
    });

    if (!user) return false

    return user.get()
  }

  catch(e) {
    console.log(e);
    console.log("isUserAuthenticated() Error");
    return false
  }
}

export default isUserAuthenticated;