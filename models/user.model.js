const { sequelize, DataTypes } = require("./db.config");

const User = sequelize.define(
  "User",
  {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wallet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    walletType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // tableName: 'users',  // Specify table name (optional)
    timestamps: false,
  }
);

module.exports = User;
