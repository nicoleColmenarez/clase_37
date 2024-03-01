const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const alias = "genre";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
       
    };

    const config = {
        tableName: "genres",
        timestamps: true,
        underscored : true
    };

    const Genre= sequelize.define(alias, cols, config);
    return Genre;
};