import Axios from "axios";

interface IGenerateOgCard {
  username: string,
  full_name: string,
  profile_picture: string
}

const generateOgCard = async (payload: IGenerateOgCard) => {
  try {
    const { data } = await Axios.post(
      "https://astro-og-account.vercel.app/api/account-card",
      payload,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (data.message !== "OK") return { error: data.message }

    return { data: data.data as string }
  }

  catch(e) {
    console.error(e);
    console.error("generateOgCard() Error");
    return { error: "Error while generating og account card :(" }
  }
};

export default generateOgCard;