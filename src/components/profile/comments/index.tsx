import React from "react";

// Components
import FormMessage from "./FormMessage";
import NoLogged from "./NoLogged";
import Card from "./Card";

// Types
import { IUserProp } from "types/User";

interface ICommentsProps {
  profile_id: number,
  session: IUserProp,
  comments: Array<any>,
  setComments: (value: Array<any> | ((prev: Array<any>) => Array<any>)) => void
}

function Comments({ profile_id, session, comments, setComments }: ICommentsProps) {
  const user_id = session ? session.id : undefined

  return (
    <div className="iw-w-full">
      {
        session ? (
          <FormMessage
            className="iw-mb-4"
            profile_id={profile_id}
            setComments={setComments}
          />
        ) : (
          <NoLogged
            className="iw-mb-4"
          />
        )
      }

      <div>
        {
          comments.map((value: any) => (
            <Card
              key={value.id}
              id={value.id}
              session_id={session ? session.id : 0}
              username={value.user_data.username}
              profile_picture={value.user_data.profile_picture}
              message={value.message}
              createdAt={value.createdAt}
              likes={value.likes}
              is_user={value.user_data.id === user_id}
            />
          ))
        }
      </div>
    </div>
  )
};

export default Comments;
