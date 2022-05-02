import React, { useEffect } from "react";

// Components
import NoUserAvatar from "components/NoUserAvatar"
import Button from "components/Button";
import Comments from "./comments/index";

// Types
import { IUserProp, IUser } from "types/User";

interface IProfileProps {
  user: IUser,
  session: IUserProp,
  comments: Array<any>
}

function Profile({ user, session, comments }: IProfileProps) {

  useEffect(() => {
    console.log(comments)
  }, [])

  return (
    <div className="iw-flex iw-flex-col iw-items-center iw-w-full iw-max-w-md iw-mx-auto">
      {
        user.profile_picture
          ? (
            <img
              className="iw-w-20 iw-h-20 iw-object-cover iw-object-center iw-rounded-full iw-mb-1"
              src={user.profile_picture}
              alt={user.username}
            />
          ) : (
            <NoUserAvatar className="iw-bg-stone-700 iw-w-20 iw-h-20 iw-text-2xl iw-mb-1" username={user.username}/>
          )
      }
      <h1 className="iw-text-lg iw-mb-3">@<span>{user.username}</span></h1>
      <h2 className="iw-text-3xl iw-mb-3 iw-font-medium">{user.full_name}</h2>
      <p className="iw-text-lg iw-mb-4">
        {
          !user.description
            ? "No description"
            : user.description
        }
      </p>

      {
        (session && session.id === user.id) && (
          <Button
            className="iw-bg-indigo-500 hover:iw-bg-indigo-600 iw-w-full iw-mb-4"
            type="link"
            href="/settings"
          >
            Edit Account
          </Button>
        )
      }

      <Comments
        profile_id={user.id}
      />
    </div>
  )
};

export default Profile;