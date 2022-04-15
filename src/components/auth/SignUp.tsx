import React, { useState } from "react";
import { toast } from "react-hot-toast";

// Components
import Wrapper from "./Wrapper";
import Input from "../form/Input"
import Button from "../Button";

// Requests
import { AxiosSignUp } from "requests/AxiosAuth";

function SignUp() {
  const [fetching, setFetching] = useState<boolean>(false);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    setFetching(true)
    const { error } = await AxiosSignUp(values as any);

    setFetching(false)

    if (error) {
      toast.error(error);
      return
    }

    toast.success("PRO")
  }

  return (
    <Wrapper title="Sign Up" onSubmit={handleOnSubmit}>
      <Input
        className="iw-mb-4"
        labelTitle="Full Name"
        placeholder="ex. Joe Doe"
        name="full_name"
        disabled={fetching}
      />

      <Input
        className="iw-mb-4"
        labelTitle="Username"
        placeholder="ex. iTomasi"
        name="username"
        disabled={fetching}
      />

      <Input
        type="password"
        className="iw-mb-4"
        labelTitle="Password"
        placeholder="Minimum 5 characters"
        name="password"
        disabled={fetching}
      />

      <Input
        type="password"
        className="iw-mb-4"
        labelTitle="Confirm Password"
        placeholder="Confirm your password"
        name="confirm_password"
        disabled={fetching}
      />

      <Button
        className="iw-bg-indigo-500 hover:iw-bg-indigo-600 iw-w-full"
        loading={fetching}
      >
        Create an account
      </Button>
    </Wrapper>
  )
};

export default SignUp;