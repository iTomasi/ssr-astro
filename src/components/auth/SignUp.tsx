import React from "react";

// Components
import Wrapper from "./Wrapper";
import Input from "../form/Input"
import Button from "../Button";

function SignUp() {
  return (
    <Wrapper title="Sign Up">
      <Input
        className="iw-mb-4"
        labelTitle="Full Name"
        placeholder="ex. Joe Doe"
        name="full_name"
      />

      <Input
        className="iw-mb-4"
        labelTitle="Username"
        placeholder="ex. iTomasi"
        name="username"
      />

      <Input
        className="iw-mb-4"
        labelTitle="Password"
        placeholder="Minimum 5 characters"
        name="password"
      />

      <Input
        className="iw-mb-4"
        labelTitle="Confirm Password"
        placeholder="Confirm your password"
        name="confirm_password"
      />

      <Button
        className="iw-bg-indigo-500 hover:iw-bg-indigo-600 iw-w-full"
      >
        Create an account
      </Button>
    </Wrapper>
  )
};

export default SignUp;