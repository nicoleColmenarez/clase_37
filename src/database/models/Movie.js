const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const alias = "movie";
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue : 0
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        length : {
            type : DataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id : {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue : null 
        }
    };

    const config = {
        tableName: "movies",
        timestamps: true,
        underscored:true 
    };

    const Movie = sequelize.define(alias, cols, config);
    
    return Movie;
};