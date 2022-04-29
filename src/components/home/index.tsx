import React from "react";

// Components
import Card from "./Card";

// Types
import { IUser, IUserProp } from "types/User";

interface IHomeProps {
  user: IUserProp,
  users: Array<IUser>
}

function Home({ user, users }: IHomeProps) {
  return (
    <div>
      <h1 className="iw-text-4xl iw-text-center iw-font-bold iw-mb-8">Welcome!</h1>

      <div className="iw-flex iw-flex-wrap iw-justify-center iw-gap-4">
        {
          users.map((theUser, index) => (
            <Card
              key={index}
              username={theUser.username}
              full_name={theUser.full_name}
              profile_picture={theUser.profile_picture}
              active={(user && user.id === theUser.id)}
            />
          ))
        } 
      </div>
    </div>
  )
};

export default Home;