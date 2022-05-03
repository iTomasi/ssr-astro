import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

// Components
import Wrapper from "components/auth/Wrapper";
import UserPicture from "./UserPicture";
import Input from "components/form/Input";
import Button from "components/Button";

// Types
import { IUser, IUserEditable, IUserProfilePictureEditable, UserKey } from "types/User";

// Requests
import { AxiosEditAccount } from "requests/AxiosAuth";

// Libs
import cloudinaryUpload from "libs/cloudinaryUpload";

interface ISettingsProps {
  user: IUser
}

function Settings({ user }: ISettingsProps) {
  const [fetching, setFetching] = useState<boolean>(false);
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

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let profile_picture: string = user.profile_picture;
    const { full_name, username, description } = Object.fromEntries(new FormData(e.currentTarget));

    setFetching(true)

    if (userEditable.profile_picture.blob) {
      const { error, data } = await cloudinaryUpload(
        {
          blob: userEditable.profile_picture.blob,
          folder: `/astro-hackaton/accounts/${user.id}`
        },
        {
          onUploadProgress: (percentage: number) => {
            console.log(percentage)
          }
        }
      );

      if (error) toast.error(error)
      else if (data) profile_picture = data
    }

    const { error } = await AxiosEditAccount({
      username: username as string,
      full_name: full_name as string,
      description: description as string,
      profile_picture
    });

    if (error) {
      toast.error(error);
      setFetching(false);
      return
    }

    toast.success("Account update successfully!");

    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  return (
    <Wrapper title="Edit Account" onSubmit={handleOnSubmit}>
      <UserPicture
        className="iw-mb-4"
        username={user.username}
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
        disabled={fetching}
      />

      <Input
        className="iw-mb-4"
        labelTitle="Username"
        placeholder="ex. iTomasi"
        name="username"
        value={userEditable.username}
        onChange={handleOnChangeInputs}
        disabled={fetching}
      />

      <Input
        type="textarea"
        className="iw-mb-4"
        labelTitle="Description"
        placeholder="Description!"
        name="description"
        value={userEditable.description}
        onChange={handleOnChangeInputs}
        disabled={fetching}
      />

      <Button
        className="iw-bg-indigo-500 hover:iw-bg-indigo-600 iw-w-full"
        disabled={!haveChanges}
        loading={fetching}
      >
        Update Account
      </Button>
    </Wrapper>
  )
};

export default Settings;