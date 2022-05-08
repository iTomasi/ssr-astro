import { DataTypes, Model } from "sequelize";
import { postgres } from "databases/postgres";

interface IAccount {
  id?: number,
  full_name: string,
  username: string,
  username_lower: string,
  description?: string,
  profile_picture?: string,
  og_img?: string,
  followers?: Array<number>,
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
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    og_img: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    followers: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
      defaultValue: []
    },  
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    scopes: {
      sensitiveData: {
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "username_lower"]
        }
      }
    }
  }
);

export default Account;