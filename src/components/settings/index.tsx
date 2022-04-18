import React, { useState } from "react";

// Components
import Wrapper from "components/auth/Wrapper";
import UserPicture from "./UserPicture";

// Types
import { IUser, IUserEditable, IUserProfilePictureEditable } from "types/User";

interface ISettingsProps {
  user: IUser
}

function Settings({ user }: ISettingsProps) {
  const [userEditable, setUserEditable] = useState<IUserEditable>({
    username: user.username,
    full_name: user.full_name,
    description: user.description,
    profile_picture: {
      url: user.profile_picture,
      blob: null
    }
  })

  const handleOnChangeUserPicture = (values: IUserProfilePictureEditable) => {
    setUserEditable((prev) => {
      return {
        ...prev,
        profile_picture: values
      }
    })
  }

  return (
    <Wrapper title="Edit Account">
      <UserPicture
        url={userEditable.profile_picture.url}
        onChange={handleOnChangeUserPicture}
      />
    </Wrapper>
  )
};

export default Settings;