export interface IUser {
  id: number,
  full_name: string,
  username: string,
  description: string,
  profile_picture: string,
}

export type IUserProp = IUser | false