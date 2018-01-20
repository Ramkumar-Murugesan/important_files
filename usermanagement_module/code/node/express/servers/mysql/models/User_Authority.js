'use strict'

module.exports = function(sequelize , DataTypes){
    var user_authority = sequelize.define("user_authority",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        created_by:DataTypes.INTEGER,
        updated_by:DataTypes.INTEGER,
        user_id:DataTypes.INTEGER,
        authority_id:DataTypes.INTEGER
    },{
        createdAt:false,
        updatedAt:false,
        freezeTableName:true
    });
    return user_authority;
}


