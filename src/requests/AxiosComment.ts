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

    if (data.message !== "OK") return { error: data.message }

    return { data: data.data }
  }

  catch(e) {
    console.error(e);
    console.error("AxiosPublishComment() Error");
    return { error: "Server Error Connection" }
  }
}