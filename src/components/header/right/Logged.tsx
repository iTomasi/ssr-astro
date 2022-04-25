import React, { useState } from "react";

// Components
import NoUserAvatar from "components/NoUserAvatar";
import { LogoutIcon } from "@heroicons/react/outline";
import LoggedOpts from "./LoggedOpts";

// Types
import { IUserProp } from "types/User";

interface ILoggedProps {
  user: IUserProp
}

function Logged({ user }: ILoggedProps) {
  if (!user) return null

  const [showOpts, setShowOpts] = useState<boolean>(false);

  const handleOnClickLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; Max-Age=0";
    window.location.href = "/auth/sign-in"
  }

  return (
    <>
      <div className="iw-w-11 iw-h-11 iw-mr-4 iw-relative">
        <div
          className="iw_user-profile-picture iw-w-full iw-h-full iw-cursor-pointer"
          onClick={() => setShowOpts((prev) => !prev)}
        >
          {
            user.profile_picture
              ? <img className="iw-w-full iw-h-full iw-object-cover iw-object-center iw-rounded-full" src={user.profile_picture} alt={user.username} />
              : <NoUserAvatar username={user.username} />
          }
        </div>

        <LoggedOpts
          show={showOpts}
          setShow={setShowOpts}
          username={user.username}
        />
      </div>
      
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