const { nation } = require('../model/index')

const create = async data => {
    await nation.create(data)
}

const getAll = async () => {
    return await nation.findAll()
}

const getNationById = async Id => {
    return await nation.findAll({
        where: {
            id: Id
        }
    })
}
const update = async (Id, data) => {
    return await nation.update(data, {
        where: {
            id: Id
        }
    })
}

const remove = async Id => {
    return await nation.destroy({
        where: {
            id: Id
        }
    })
}

module.exports = {
    create,
    getAll,
    getNationById,
    update,
    remove
}