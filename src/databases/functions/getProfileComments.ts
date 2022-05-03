import Comment from "models/Comment";
import Account from "models/Account";

const getProfileComments = async (id: number) => {
  try {
    const comments = await Comment.findAll({
      where: {
        profile_id: id
      },
      include: {
        as: "user_data",
        model: Account
      },
      order: [ ["createdAt", "DESC"] ]
    });

    return { data: comments }
  }

  catch(e) {
    console.error(e);
    console.error("getProfileComments() Error");
    return { error: "Model Error" }
  }
}

export default getProfileComments;