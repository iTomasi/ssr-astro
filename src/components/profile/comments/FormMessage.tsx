import React, { useState } from "react";
import { toast } from "react-hot-toast";

// Components
import Input from "components/form/Input";
import Button from "components/Button";

// Requests
import { AxiosPublishComment } from "requests/AxiosComment";

interface IFormMessageProps {
  profile_id: number
}

function FormMessage({ profile_id }: IFormMessageProps) {
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [fetching, setFetching] = useState<boolean>(false);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { message } = Object.fromEntries(new FormData(e.currentTarget));

    if (!message) return

    setFetching(true)

    const { error } = await AxiosPublishComment({
      profile_id,
      message: message as string
    });

    setFetching(false);

    if (error) {
      toast.error(error);
      return
    }

    toast.success("Comment published sucessfully!")
  }

  return (
    <form className="iw-bg-stone-800 iw-p-4 iw-rounded" onSubmit={handleOnSubmit}>
      <Input
        className="iw-mb-4"
        type="textarea"
        labelTitle="Write a comment"
        name="message"
        placeholder="Write something :D"
        onChange={(e) => {
          const targetValue = e.target.value;

          if (targetValue.trim() && disabledButton) {
            setDisabledButton(false)
          }

          else if (!targetValue.trim() && !disabledButton) {
            setDisabledButton(true)
          }
        }}
      />

      <Button
        className="iw-w-full iw-bg-indigo-500 hover:iw-bg-indigo-600"
        loading={fetching}
        disabled={disabledButton}
      >
        Publish
      </Button>
      
    </form>
  )
};

export default FormMessage;