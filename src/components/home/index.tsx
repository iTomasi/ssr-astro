import React from "react";

// Components
import Card from "./Card";

// Types
import { IUser } from "types/User";

interface IHomeProps {
  users: Array<IUser>
}

function Home({ users }: IHomeProps) {
  return (
    <div>
      <h1 className="iw-text-4xl iw-text-center iw-font-bold iw-mb-8">Welcome!</h1>

      <div className="iw-flex iw-flex-wrap iw-justify-center iw-gap-4">
        {
          users.map((user, index) => (
            <Card
              key={index}
              username={user.username}
              full_name={user.full_name}
              profile_picture={user.profile_picture}
            />
          ))
        } 
      </div>
    </div>
  )
};

export default Home;