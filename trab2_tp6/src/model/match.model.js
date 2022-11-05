module.exports = (sequelize, DataTypes) =>{
    const Match = sequelize.define('match', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nation_a: DataTypes.STRING,
        score_nation_a: DataTypes.STRING,
        nation_b: DataTypes.INTEGER,
        score_nation_b: DataTypes.INTEGER,
        match_date: DataTypes.DATE,

    },{
        timestamps: false,
        freezeTableName: true
    })

    return Match
}