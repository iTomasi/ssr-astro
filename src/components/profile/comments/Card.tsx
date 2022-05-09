import React, { useState } from "react";
import { toast } from "react-hot-toast";

// Components
import NoUserAvatar from "components/NoUserAvatar";
import Likes from "./Likes";

// Helpers
import formatDate from "helpers/formatDate";

// Requests
import { AxiosSwitchLike } from "requests/AxiosLike";

interface ICardProps {
  id: number,
  session_id: number,
  profile_picture: string,
  username: string,
  message: string,
  createdAt: Date | string,
  likes: Array<number>,
  is_user: boolean
}

function Card({ id, session_id, profile_picture, username, message, createdAt, likes: theLikes, is_user }: ICardProps) {
  const [likes, setLikes] = useState<Array<number>>(theLikes);

  const handleOnClickLikes = () => {
    if (session_id === 0) {
      toast.error("You need to be logged for give a like");
      return
    }

    setLikes((prev) => {
      if (prev.includes(session_id)) {
        return prev.filter((value) => value !== session_id)
      }

      return [...prev, session_id]
    })

    AxiosSwitchLike(id)
  }

  return (
    <div className={`iw-mb-8 iw-rounded iw-p-4 iw-transition-all iw-duration-300 hover:iw-scale-[1.01] ${is_user ? "iw-bg-indigo-500" : "iw-bg-stone-800"}`}>
      <div className="iw-flex iw-justify-between iw-items-center iw-mb-4">
        <a className="iw-flex iw-items-center iw-truncate" href={`/profile?user=${username.toLowerCase()}`}>
          <div className="iw-mr-2">
            {
              profile_picture ? (
                <img
                  className="iw-min-w-[2.5rem] iw-min-h-[2.5rem] iw-max-w-[2.5rem] iw-max-h-[2.5rem] iw-rounded-full iw-object-cover iw-object-center"
                  src={profile_picture}
                  alt={username}
                />
              ) : (
                <NoUserAvatar
                  className="iw-min-w-[2.5rem] iw-min-h-[2.5rem] iw-max-w-[2.5rem] iw-max-h-[2.5rem]"
                  username={username}
                />
              )
            }
          </div>

          <h4 className="iw-font-medium iw-truncate">{username}</h4>
        </a>

        <h5>{ formatDate(new Date(createdAt).getTime()) }</h5>
      </div>

      <p className="iw-break-words iw-mb-4">{message}</p>

      <Likes
        quantity={likes.length}
        onClick={handleOnClickLikes}
        active={likes.includes(session_id)}
      />
    </div>
  )
};

export default Card;