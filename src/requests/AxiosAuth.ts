import Axios from "axios";

interface IAxiosSignUp {
  full_name: string;
  username: string;
  password: string;
  confirm_password: string;
}

export const AxiosSignUp = async (payload: IAxiosSignUp) => {
  try {
    const { data } = await Axios.post(
      "/api/auth/sign-up",
      payload,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (data.message !== "OK") return { error: data.message }

    return { success: "PRO" }
  }

  catch(e) {
    console.log(e);
    console.log("AxiosSignUp() Error");
    return { error: "Server Error Connection" }
  }
}