module.exports = (sequelize, DataTypes) =>{
    const Match = sequelize.define('match', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nationA: DataTypes.STRING,
        scoreNationA: DataTypes.STRING,
        nationB: DataTypes.INTEGER,
        scoreNationB: DataTypes.INTEGER,
        matchDate: DataTypes.DATE,

    },{
        timestamps: false,
        freezeTableName: true
    })

    return Match
}