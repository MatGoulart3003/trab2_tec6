const { match } = require('../model/index')
const { Op } = require('sequelize')

const create = async data => {
    await match.create(data)
}
const getAll = async () => {
    return await match.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
}
const getById = async Id => {
    return await match.findAll({
        where: {
            id: Id
        }
    })
}

const getByNation = async nation => {
    return await match.findAll({
        where: {
            [Op.or]: [
                { nation_a: nation },
                { nation_b: nation }
            ]
        }
    })
}

const getByDate = async date => {
    return await match.findAll({
        where: {
            match_date: date
        }
    })
}

const updateScore = async (Id, scoreNationA, scoreNationB) => {
    
    const changedMatch = await match.findByPk(Id)

    changedMatch.score_nation_a = Number(scoreNationA);
    changedMatch.score_nation_b = Number(scoreNationB);
    console.log(changedMatch)
    return await changedMatch.save()

}

const remove = async Id => {
    return await match.destroy({
        where: {
            id: Id
        }
    })
}

module.exports = {
    create,
    getAll,
    getByNation,
    getByDate,
    getById,
    updateScore,
    remove
}