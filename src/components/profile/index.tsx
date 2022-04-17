import React from "react";

// Types
import { IUser } from "types/User";

interface IProfileProps {
  user: IUser
}

function Profile({ user }: IProfileProps) {
  return (
    <div>
      Profile {user.username}
    </div>
  )
};

export default Profile;