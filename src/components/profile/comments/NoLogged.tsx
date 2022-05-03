import React from "react";

interface INoLoggedProps {
  className?: string
}

function NoLogged({ className = "" }: INoLoggedProps) {
  return (
    <div className={`iw-bg-stone-800 iw-p-4 iw-rounded iw-text-center iw-border-2 iw-border-stone-700 ${className}`}>
      For write a comment, you need to be <a className="iw-font-medium iw-underline iw-text-indigo-400 hover:iw-text-indigo-500" href="/auth/sign-in">Logged</a>
    </div>
  )
};

export default NoLogged