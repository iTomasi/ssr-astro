import Axios from "axios";

interface IAxiosSignUp {
  full_name: string,
  username: string,
  password: string,
  confirm_password: string
}

interface IAxiosData {
  token: string
}

interface IAxiosSignIn {
  username: string,
  password: string
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

    if (data.message !== "OK") return { error: data.message as string }

    return { data: data.data as IAxiosData }
  }

  catch(e) {
    console.log(e);
    console.log("AxiosSignUp() Error");
    return { error: "Server Error Connection" }
  }
}

export const AxiosSignIn = async (payload: IAxiosSignIn) => {
  try {
    const { data } = await Axios.post(
      "/api/auth/sign-in",
      payload,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (data.message !== "OK") return { error: data.message }

    return {
      data: data.data as IAxiosData
    }
  }

  catch(e) {
    console.log(e);
    console.log("AxiosSignIn() Error");
    return { error: "Server Error Connection" }
  }
}