module.exports = (sequelize, DataTypes) =>{
    const Nation = sequelize.define('nation', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING

    },{
        timestamps: false,
        freezeTableName: true
    })

    return Nation
}