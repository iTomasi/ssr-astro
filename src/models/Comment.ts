import { DataTypes, Model } from "sequelize";
import { postgres } from "databases/postgres";

interface IComment {
  id?: number,
  profile_id: number,
  user_id: number,
  message: string
}

const Comment = postgres.define<Model<IComment>>(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },

    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
);

export default Comment;