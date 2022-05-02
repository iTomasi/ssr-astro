import Axios from "axios";
import { getCookie } from "helpers/cookies";

interface IAxiosPublishComment {
  profile_id: number,
  message: string
}

export const AxiosPublishComment = async (payload: IAxiosPublishComment) => {
  const userToken = getCookie("token");

  if (!userToken) return { error: "You are not logged" }

  try {
    const { data } = await Axios.post(
      "/api/comment",
      payload,
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
    console.error("AxiosPublishComment() Error");
    return { error: "Server Error Connection" }
  }

}