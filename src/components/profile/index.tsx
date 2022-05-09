import React, { useState } from "react";

// Components
import NoUserAvatar from "components/NoUserAvatar"
import Button from "components/Button";
import Comments from "./comments/index";

// Types
import { IUserProp, IUser } from "types/User";

// Requests
import { AxiosSwitchFollower } from "requests/AxiosFollowers";

interface IProfileProps {
  user: IUser,
  session: IUserProp,
  comments: Array<any>
}

function Profile({ user, session, comments }: IProfileProps) {
  const [theComments, setTheComments] = useState<Array<any>>(comments);
  const [followers, setFollowers] = useState<Array<number>>(user.followers);

  const handleOnClickFollow = () => {
    if (!session) {
      window.location.href = "/auth/sign-in";
      return
    }

    setFollowers((prev) => {
      if (prev.includes(session.id)) {
        const filter = prev.filter((id) => id !== session.id);

        return filter
      }

      return [...prev, session.id]
    })

    AxiosSwitchFollower(user.id)
  }

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
      <div className="iw-bg-stone-800 iw-w-full iw-mb-3 iw-p-4 iw-text-center iw-rounded">
        <h3 className="iw-text-xl iw-font-semibold">Followers</h3>
        <h4>{followers.length}</h4>
      </div>
      <h2 className="iw-text-3xl iw-mb-3 iw-font-medium">{user.full_name}</h2>
      <p className="iw-text-lg iw-mb-4">
        {
          !user.description
            ? "No description"
            : user.description
        }
      </p>

      {
        (session && session.id === user.id) ? (
          <Button
            className="iw-w-full iw-mb-4 iw-bg-indigo-500 hover:iw-bg-indigo-600"
            type="link"
            href="/settings"
          >
            Edit Profile
          </Button>
        ) : (
          <Button
            className={`iw-w-full iw-mb-4 ${(session && followers.includes(session.id)) ? "iw-bg-red-500 hover:iw-bg-red-600" : "iw-bg-indigo-500 hover:iw-bg-indigo-600"}`}
            type="button"
            onClick={handleOnClickFollow}
          >
            {
              session && followers.includes(session.id)
                ? "Unfollow"
                : "Follow"
            }
          </Button>
        )
      }

      <Comments
        profile_id={user.id}
        session={session}
        comments={theComments}
        setComments={setTheComments}
      />
    </div>
  )
};

export default Profile;