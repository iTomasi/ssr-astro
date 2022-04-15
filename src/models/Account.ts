import { DataTypes, Model } from "sequelize";
import { postgres } from "databases/postgres";

interface IAccount {
  id?: number,
  full_name: string,
  username: string,
  username_lower: string,
  password: string
};

const Account = postgres.define<Model<IAccount>>(
  "Account",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username_lower: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
);

export default Account;