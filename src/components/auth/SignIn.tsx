import React from "react";

// Components
import Wrapper from "./Wrapper";
import Input from "../form/Input";
import Button from "../Button";

function SignIn() {
  return (
    <Wrapper title="Sign In">
      <Input
        className="iw-mb-4"
        labelTitle="Username"
        placeholder="ex. iTomasi"
        name="username"
      />

      <Input
        className="iw-mb-4"
        labelTitle="Password"
        placeholder="Your password account"
        name="password"
      />

      <Button
        className="iw-bg-indigo-500 hover:iw-bg-indigo-600 iw-w-full"
      >
        Log in
      </Button>
    </Wrapper>
  )
}

export default SignIn;