'use strict';


module.exports = (sequelize, DataTypes) => { 
    
    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(20)
        },
        price: {
            type: DataTypes.DECIMAL
        },
        image: { 
            type: DataTypes.STRING(80)
        },
        descrip: {
            type: DataTypes.STRING(400)
        }
    };
    let config = {
        tableName: "Product",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);
    

    Product.associate = (models) => {

        Product.belongsTo(models.Status)
        Product.belongsTo(models.Category)

   /* Product.associate = models => {

        Product.belongsTo(models.Status, {
        });
        Product.belongsTo(models.Category, {
        });
    }*/}

    return Product;
}