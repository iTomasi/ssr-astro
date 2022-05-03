import React from "react";

// Components
import NoUserAvatar from "components/NoUserAvatar";

// Helpers
import formatDate from "helpers/formatDate";

interface ICardProps {
  profile_picture: string,
  username: string,
  message: string,
  createdAt: Date | string,
  is_user: boolean
}

function Card({ profile_picture, username, message, createdAt, is_user }: ICardProps) {
  return (
    <div className={`iw-mb-8 iw-rounded iw-p-4 ${is_user ? "iw-bg-indigo-500" : "iw-bg-stone-800"}`}>
      <div className="iw-flex iw-justify-between iw-items-center iw-mb-4">
        <div className="iw-flex iw-items-center iw-truncate">
          <div className="iw-mr-2">
            {
              profile_picture ? (
                <img
                  className="iw-min-w-[2.5rem] iw-min-h-[2.5rem] iw-max-w-[2.5rem] iw-max-h-[2.5rem]iw-w-full iw-h-full iw-rounded-full iw-object-cover iw-object-center"
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
        </div>

        <h5>{ formatDate(new Date(createdAt).getTime()) }</h5>
      </div>

      <p className="iw-break-words">{message}</p>
    </div>
  )
};

export default Card;