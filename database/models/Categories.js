'use strict';


module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
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
            tableName: "Category",
            timestamps: false
        };
    
        const Category = sequelize.define(alias, cols, config);

        Category.associate = (models) => {

            Category.hasMany(models.Product, {
                //as:'products',
                //foreignKey: 'category_id'
        });
    }



    return Category;
};