import React, { useState, useEffect } from "react";

// Components
import Wrapper from "components/auth/Wrapper";
import UserPicture from "./UserPicture";
import Input from "components/form/Input";
import Button from "components/Button";

// Types
import { IUser, IUserEditable, IUserProfilePictureEditable, UserKey } from "types/User";

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

  const [haveChanges, setHaveChanges] = useState<boolean>(false);

  useEffect(() => {
    setHaveChanges(userHasChanges())
  }, [userEditable])

  const userHasChanges = () => {
    const entries = Object.entries(userEditable);
    let hasChanges: boolean = false

    for (const [key, value] of entries) {
      if (key === "profile_picture") {
        if (user[key] !== value.url) {
          hasChanges = true;
          break
        }
        continue
      }

      else if (user[key as UserKey] !== value) {
        hasChanges = true;
        break
      }
    }

    return hasChanges
  }

  const handleOnChangeUserPicture = (values: IUserProfilePictureEditable) => {
    setUserEditable((prev) => {
      return {
        ...prev,
        profile_picture: values
      }
    })
  }

  const handleOnChangeInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserEditable((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <Wrapper title="Edit Account">
      <UserPicture
        className="iw-mb-4"
        url={userEditable.profile_picture.url}
        onChange={handleOnChangeUserPicture}
      />

      <Input
        className="iw-mb-4"
        labelTitle="Full Name"
        placeholder="ex. Tomas Duclos"
        name="full_name"
        value={userEditable.full_name}
        onChange={handleOnChangeInputs}
      />

      <Input
        className="iw-mb-4"
        labelTitle="Username"
        placeholder="ex. iTomasi"
        name="username"
        value={userEditable.username}
        onChange={handleOnChangeInputs}
      />

      <Input
        type="textarea"
        className="iw-mb-4"
        labelTitle="Description"
        placeholder="Description!"
        name="description"
        value={userEditable.description}
        onChange={handleOnChangeInputs}
      />

      <Button
        className="iw-bg-indigo-500 hover:iw-bg-indigo-600 iw-w-full"
        disabled={!haveChanges}
      >
        Update Account
      </Button>
    </Wrapper>
  )
};

export default Settings;