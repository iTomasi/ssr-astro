import React from "react";

// Components
import Button from "../Button"

function Right() {
  return (
    <div className="iw-flex">
      <Button
        type="link"
        className="iw-bg-indigo-500 hover:iw-bg-indigo-600 iw-mr-4"
        href="/auth/sign-in"
      >
        Sign In
      </Button>

      <Button
        type="link"
        className="iw-bg-indigo-500 hover:iw-bg-indigo-600"
        href="/auth/sign-up"
      >
        Sign Up
      </Button>
    </div>
  )
};

export default Right;