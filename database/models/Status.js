'use strict';


module.exports = (sequelize, DataTypes) => {
    
        let alias = "Status";
        let cols = {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(30)
            },
        };
        let config = {
            tableName: "status",
            timestamps: false
        };
    
        const Status = sequelize.define(alias, cols, config);

    Status.associate = (models) => {

        Status.hasMany(models.Product, {
           // as:'products',
            //foreignKey: 'status_id'
        });
    }


    return Status;
};