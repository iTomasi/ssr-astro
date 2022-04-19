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
    const { error, data } = await AxiosSignUp(values as any);

    if (error || !data) {
      toast.error(error);
      setFetching(false)
      return
    }

    document.cookie = `token=${data.token}; path=/`;

    toast.success("Account created successfully, redirecting...")

    setTimeout(() => {
      window.location.href = "/"
    }, 2000)
  }

  return (
    <Wrapper title="Sign Up" onSubmit={handleOnSubmit}>
      <Input
        className="iw-mb-4"
        labelTitle="Full Name"
        placeholder="ex. Tomas Duclos"
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