export type UserKey = "id" | "full_name" | "username" | "description" | "profile_picture";

export interface IUser {
  id: number,
  full_name: string,
  username: string,
  description: string,
  profile_picture: string,
}

export interface IUserProfilePictureEditable {
  url: string,
  blob: null | Blob
}

export interface IUserEditable {
  full_name: string,
  username: string,
  description: string,
  profile_picture: IUserProfilePictureEditable
}

export type IUserProp = IUser | false