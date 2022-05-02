import React from "react";

// Components
import FormMessage from "./FormMessage";

interface ICommentsProps {
  profile_id: number
}

function Comments({ profile_id }: ICommentsProps) {
  return (
    <div className="iw-w-full">
      <FormMessage
        profile_id={profile_id}
      />
    </div>
  )
};

export default Comments;