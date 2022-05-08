import Axios from "axios";
import { getCookie } from "helpers/cookies";

export const AxiosSwitchFollower = async (user_id: number) => {
  const userToken = getCookie("token");

  if (!userToken) return { error: "You are not logged :(" }

  try {
    const { data } = await Axios.post(
      "/api/follower",
      {
        user_id
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`
        }
      }
    );

    if (data.message !== "OK") return { error: data.message }

    return { success: "PRO" }
  }

  catch(e) {
    console.error(e);
    console.error("AxiosSwitchFollower() Error");
    return { error: "Server Error Connection" }
  }
}