module.exports = (sequelize, DataTypes) =>{
    const Game = sequelize.define('game', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        NationIdA: {
            type: DataTypes.INTEGER
            
        },
        NationIdB: DataTypes.INTEGER

    },{
        timestamps: false,
        freezeTableName: true
    })

    return Game
}