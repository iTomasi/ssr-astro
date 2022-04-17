import Account from "models/Account";
import { IUser } from "types/User";

const getUser = async (username: string) => {
  try {
    const user = await Account.scope("sensitiveData").findOne({
      where: {
        username_lower: username.toLowerCase()
      }
    });

    if (!user) return { error: "Username not found :(" }

    return {
      data: user.get() as IUser
    }
  }

  catch(e) {
    console.log(e);
    console.log("getUser() Error");
    return { error: "Postgres error" }
  }
};

export default getUser;