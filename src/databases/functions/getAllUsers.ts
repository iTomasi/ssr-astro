import Account from "models/Account";

const getAllUsers = async () => {
  try {
    const users = await Account.scope("sensitiveData").findAll({
      raw: true
    });

    return {
      data: users
    }
  }

  catch(e) {
    console.error(e);
    console.error("getAllUsers() Error");
    return { error: "postgres error" }
  }
};

export default getAllUsers;