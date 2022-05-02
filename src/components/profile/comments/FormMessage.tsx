import React from "react";

// Components
import Input from "components/form/Input";
import Button from "components/Button";

// Requests
import { AxiosPublishComment } from "requests/AxiosComment";

interface IFormMessageProps {
  profile_id: number
}

function FormMessage({ profile_id }: IFormMessageProps) {
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { message } = Object.fromEntries(new FormData(e.currentTarget));

    if (!message) return

    const { error } = await AxiosPublishComment({
      profile_id,
      message: message as string
    });

    if (error) {
      console.error(error);
      return
    }

    console.log("aaa")
  }

  return (
    <form className="iw-bg-stone-800 iw-p-4 iw-rounded" onSubmit={handleOnSubmit}>
      <Input
        className="iw-mb-4"
        type="textarea"
        labelTitle="Write a comment"
        name="message"
        placeholder="Write something :D"
      />

      <Button
        className="iw-w-full iw-bg-indigo-500 hover:iw-bg-indigo-600"
      >
        Publish
      </Button>
      
    </form>
  )
};

export default FormMessage;