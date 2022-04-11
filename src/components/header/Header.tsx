import React from "react";

// Components
import Left from "./Left";
import Right from "./Right";

function Header() {
  return (
    <header className="iw-fixed iw-top-0 iw-right-0 iw-left-0 iw-w-full iw-bg-stone-800 iw-h-16 iw-flex iw-justify-between iw-items-center iw-px-8">
      <Left/>
      <Right/>
    </header>
  )
};

export default Header;