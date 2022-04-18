import React from "react";

// Components
import NoUserAvatar from "components/NoUserAvatar"

// Types
import { IUser } from "types/User";

interface IProfileProps {
  user: IUser
}

function Profile({ user }: IProfileProps) {
  return (
    <div className="iw-flex iw-flex-col iw-items-center iw-w-full iw-max-w-md iw-mx-auto">
      <NoUserAvatar className="iw-bg-stone-700 iw-w-20 iw-h-20 iw-text-2xl iw-mb-1" username={user.username}/>
      <h1 className="iw-text-lg iw-mb-3">@<span>{user.username}</span></h1>
      <h2 className="iw-text-3xl iw-mb-3 iw-font-medium">{user.full_name}</h2>
      <p className="iw-text-lg">
        {
          !user.description
            ? "No description"
            : user.description
        }
      </p>
    </div>
  )
};

export default Profile;