import React from "react";

// Components
import NoLogged from "./NoLogged";
import Logged from "./Logged";

// Types
import { IUserProp } from "types/User"

interface IRightProps {
  user: IUserProp
}

function Right({ user }: IRightProps) {
  return (
    <div className="iw-flex">
      {
        user
          ? <Logged user={user}/>
          : <NoLogged/>
      }
    </div>
  )
};

export default Right;