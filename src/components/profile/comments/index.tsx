import React from "react";

// Components
import FormMessage from "./FormMessage";
import Card from "./Card";

interface ICommentsProps {
  profile_id: number,
  user_id: undefined | number,
  comments: Array<any>,
  setComments: (value: Array<any> | ((prev: Array<any>) => Array<any>)) => void
}

function Comments({ profile_id, user_id, comments, setComments }: ICommentsProps) {
  return (
    <div className="iw-w-full">
      <FormMessage
        className="iw-mb-4"
        profile_id={profile_id}
        setComments={setComments}
      />

      <div>
        {
          comments.map((value: any, index: number) => (
            <Card
              key={index}
              username={value.user_data.username}
              profile_picture={value.user_data.profile_picture}
              message={value.message}
              createdAt={value.createdAt}
              is_user={value.user_data.id === user_id}
            />
          ))
        }
      </div>
    </div>
  )
};

export default Comments;
