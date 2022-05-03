import React from "react";

// Components
import NoUserAvatar from "components/NoUserAvatar";

interface ICardProps {
  profile_picture: string,
  username: string,
  message: string
}

function Card({ profile_picture, username, message }: ICardProps) {
  return (
    <div className="iw-mb-8 iw-bg-stone-800 iw-rounded iw-p-4">
      <div className="iw-flex iw-justify-between iw-items-center iw-mb-4">
        <div className="iw-flex iw-items-center">
          <div className="iw-w-10 iw-h-10 iw-mr-2">
            {
              profile_picture ? (
                <img
                  className="iw-w-full iw-h-full iw-rounded-full iw-object-cover iw-object-center"
                  src={profile_picture}
                  alt={username}
                />
              ) : (
                <NoUserAvatar
                  className="iw-w-full iw-h-full"
                  username={username}
                />
              )
            }
          </div>

          <h4 className="iw-font-medium">{username}</h4>
        </div>

        <h5>3 Minutes ago</h5>
      </div>

      <p>{message}</p>
    </div>
  )
};

export default Card;