import React from "react";

// Components
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline"

interface ILikesProps {
  quantity: number,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  active: boolean,
}

const heartClassName = "iw-w-6 iw-h-6 iw-mr-2 iw-text-red-600"

function Likes({
  quantity,
  onClick,
  active
}: ILikesProps) {
  return (
    <div>
      <button
        className={`iw-flex iw-items-center iw-px-2 iw-py-1 iw-rounded iw-bg-stone-900`}
        type="button"
        onClick={onClick}
      >
        {
          active
            ? <HeartIconSolid className={heartClassName}/>
            : <HeartIconOutline className={heartClassName}/>
        }
        <span>{quantity}</span>
      </button>
    </div>
  )
};

export default Likes;