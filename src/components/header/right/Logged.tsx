import React from "react";

// Components
import NoUserAvatar from "components/NoUserAvatar";
import { LogoutIcon } from "@heroicons/react/outline";
import Button from "components/Button";

// Types
import { IUserProp } from "types/User";

interface ILoggedProps {
  user: IUserProp
}

function Logged({ user }: ILoggedProps) {

  if (!user) return null

  const handleOnClickLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0";
    window.location.href = "/auth/sign-in"
  }

  return (
    <>
      {
        user.profile_picture
          ? <img className="iw-w-11 iw-h-11 iw-mr-4 iw-object-cover iw-object-center iw-rounded-full" src={user.profile_picture} alt={user.username} />
          : <NoUserAvatar className="iw-mr-4" username={user.username} />
      }
      <button
        className="iw-bg-red-400 hover:iw-bg-red-500 iw-transition-all iw-rounded-full iw-w-11 iw-h-11 iw-flex iw-justify-center iw-items-center"
        type="button"
        onClick={handleOnClickLogout}
      >
        <LogoutIcon
          className="iw-w-6 iw-h-6"
        />
      </button>
    </>
  )
};

export default Logged;