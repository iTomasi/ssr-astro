import React, { useState } from "react";
import { toast } from "react-hot-toast";

// Components
import Wrapper from "./Wrapper";
import Input from "../form/Input";
import Button from "../Button";

// Requests
import { AxiosSignIn } from "requests/AxiosAuth";

function SignIn() {
  const [fetching, setFetching] = useState<boolean>(false);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    setFetching(true);

    const { error, data } = await AxiosSignIn(values as any)

    if (error || !data) {
      toast.error(error);
      setFetching(false)
      return
    }

    document.cookie = `token=${data.token};path=/`;

    toast.success("You have successfully logged in. Redirecting...");

    setTimeout(() => {
      window.location.href = "/"
    }, 2000)
  }

  return (
    <Wrapper title="Sign In" onSubmit={handleOnSubmit}>
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
        placeholder="Your password account"
        name="password"
        disabled={fetching}
      />

      <Button
        className="iw-bg-indigo-500 hover:iw-bg-indigo-600 iw-w-full"
        loading={fetching}
      >
        Log in
      </Button>
    </Wrapper>
  )
}

export default SignIn;