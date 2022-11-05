const service = require('../service/match.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('Match created successfully!')
}
const getAll = async (req, res) => {
    const response = await service.getAll()
    res.send(response)
}
const getById = async (req, res) => {
    const Id = parseInt(req.params.id, 10)
    res.send(await service.getById(Id))
}
const update = async (req, res) => {
    const Id = req.params.id
    await service.update(Id, req.body)
    res.status(200).send('Match updated successfully!')
}
const remove = async (req, res) => {
    const Id = req.params.id
    await service.remove(Id)
    res.status(204).send('')
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}