import React, { useState } from "react";
import { toast } from "react-hot-toast";

// Components
import Input from "components/form/Input";
import Button from "components/Button";

// Requests
import { AxiosPublishComment } from "requests/AxiosComment";

interface IFormMessageProps {
  className?: string,
  profile_id: number,
  setComments: (value: Array<any> | ((prev: Array<any>) => Array<any>)) => void
}

function FormMessage({ className = "", profile_id, setComments }: IFormMessageProps) {
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [fetching, setFetching] = useState<boolean>(false);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;

    const { message } = Object.fromEntries(new FormData(currentTarget));

    if (!message) return

    setFetching(true)

    const { error, data } = await AxiosPublishComment({
      profile_id,
      message: message as string
    });

    setFetching(false);

    if (error) {
      toast.error(error);
      return
    }

    else if (!data) {
      toast.error("wtf?");
      return
    }

    currentTarget.reset();

    setComments((prev) => [data, ...prev])

    toast.success("Comment published sucessfully!")
  }

  return (
    <form className={`iw-bg-stone-800 iw-p-4 iw-rounded ${className}`} onSubmit={handleOnSubmit}>
      <Input
        className="iw-mb-4"
        type="textarea"
        labelTitle="Write a comment"
        name="message"
        placeholder="Comment"
        onChange={(e) => {
          const targetValue = e.target.value;

          if (targetValue.trim() && disabledButton) {
            setDisabledButton(false)
          }

          else if (!targetValue.trim() && !disabledButton) {
            setDisabledButton(true)
          }
        }}
        disabled={fetching}
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