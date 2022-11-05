const { match } = require('../model/index')

const create = async data => {
    await match.create(data)
}
const getAll = async () => {
    return await match.findAll()
}
const getMatchById = async Id => {
    return await match.findAll({
        where: {
            id: Id
        }
    })
}
const update = async (Id, data) => {
    return await match.update(data, {
        where: {
            id: Id
        }
    })
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
    getMatchById,
    update,
    remove
}