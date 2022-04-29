import React from "react";

// Components
import NoUserAvatar from "components/NoUserAvatar";

interface ICardProps {
  username: string,
  full_name: string,
  profile_picture: string,
  active: boolean
}

function Card({ username, full_name, profile_picture, active }: ICardProps) {
  return (
    <a
      className={`iw-min-w-[250px] iw-max-w-[250px] iw-truncate iw-rounded iw-p-4 iw-flex iw-flex-col iw-items-center iw-text-center iw-transition-all iw-duration-500 hover:iw-scale-[1.05] ${active ? "iw-bg-indigo-500" : "iw-bg-stone-800"}`}
      href={`/profile?user=${username.toLowerCase()}`}
    >
      <div className="iw-w-20 iw-h-20 iw-mb-4">
        {
          profile_picture ? (
            <img
              className="iw-w-full iw-h-full iw-rounded-full iw-object-cover iw-object-center"
              src={profile_picture}
              alt="hey"
            />
          ) : (
            <NoUserAvatar
              className="iw-w-20 iw-h-20 iw-text-3xl"
              username={username}
            />
          )
        }
      </div>

      <h2 className="iw-text-2xl iw-font-semibold iw-mb-1 iw-truncate iw-w-full">{full_name}</h2>
      <h3 className="iw-text-xl iw-font-medium iw-truncate iw-w-full">@{username}</h3>
    </a>
  )
};

export default Card;