import React from "react";
import { toast } from "react-hot-toast";

// Components
import NoUserAvatar from "components/NoUserAvatar";
import Button from "components/Button";

// Types
import { IUserProfilePictureEditable } from "types/User";

interface IUserPictureProps {
  url: string,
  onChange: (values: IUserProfilePictureEditable) => void
}

function UserPicture({ url, onChange }: IUserPictureProps) {
  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files) return
      const file = e.target.files[0];

      e.target.value = "";

      if (!file.type.includes("image")) return toast.error("Your profile picture should be an image!")
      else if (file.size > 10_485_760) return toast.error("Your profile picture max size: 10 MB")

      const blobToUrl = URL.createObjectURL(file);

      onChange({
        url: blobToUrl,
        blob: file
      })
    }

    catch(e) {
      console.error(e);
      console.error("handleOnChangeInput() Error");
    }
  }

  return (
    <div className="iw-flex iw-items-center">
      {
        url
          ? (
            <img
              className="iw-mr-4 iw-w-16 iw-h-16 iw-rounded-full iw-object-cover iw-object-center"
              src={url}
              alt="Preview"
            />
          ) : (
            <NoUserAvatar
              className="iw-mr-4 iw-w-16 iw-h-16"
              username="Tomas"
            />
          )
      }

      <div className="iw-flex">
        <label className={`iw-inline-block iw-min-h-[2.5rem] iw-rounded iw-flex iw-justify-center iw-items-center iw-px-4 iw-bg-indigo-500 hover:iw-bg-indigo-600 iw-cursor-pointer ${url ? "iw-mr-4" : ""}`}>
          Cambiar
          <input
            className="iw-hidden"
            type="file"
            accept="image/*"
            onChange={handleOnChangeInput}
          />
        </label>

        {
          url && (
            <Button
              className="iw-bg-red-400 hover:iw-bg-red-500"
              type="button"
              onClick={() => {
                onChange({
                  url: "",
                  blob: null
                })
              }}
            >
              Eliminar
            </Button>
          )
        }
      </div>
    </div>
  )
};

export default UserPicture;