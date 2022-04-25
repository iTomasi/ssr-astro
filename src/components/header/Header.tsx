import React from "react";

// Components
import Left from "./Left";
import Right from "./right";

// Types
import { IUserProp } from "types/User";

interface IHeaderProps {
  user: IUserProp
}

function Header({ user }: IHeaderProps) {
  return (
    <header className="iw-fixed iw-top-0 iw-right-0 iw-left-0 iw-w-full iw-bg-stone-800 iw-h-16 iw-flex iw-justify-between iw-items-center iw-px-8 iw-z-50">
      <Left/>
      <Right user={user}/>
    </header>
  )
};

export default Header;