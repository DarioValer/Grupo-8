'use strict';


module.exports = (sequelize, DataTypes) => { 
    
    let alias = "user";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING(45)
        },
        last_name: {
            type: DataTypes.STRING(45)
        },
        user_alias: {
            type: DataTypes.STRING(45)
        },
        email: {
            type: DataTypes.STRING(45)
        },
        pass: {
            type: DataTypes.STRING(45)
        },
        avatar: { 
            type: DataTypes.STRING(80)
        }
    };
    let config = {
        tableName: "user",
        timestamps: false
    };

   const User = sequelize.define(alias, cols, config);
    


    return User;
};