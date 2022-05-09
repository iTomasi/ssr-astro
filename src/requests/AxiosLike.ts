import Axios from "axios";
import { getCookie } from "helpers/cookies";

export const AxiosSwitchLike = async (comment_id: number) => {
  const userToken = getCookie("token");

  if (!userToken) return { error: "You are not logged :(" }

  try {
    const { data } = await Axios.post(
      "/api/like",
      {
        comment_id
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`
        }
      }
    );

    console.log(data);

    return { success: "PRO" }
  }

  catch(e) {
    console.error(e);
    console.error("AxiosSwitchLike() Error");
    return { error: "Server Error Connection" }
  }
}