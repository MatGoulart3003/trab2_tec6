const express = require('express')
const router = express.Router()
const controller = require('../controller/match.controller')

router.get('/', controller.getAll)
router.post('/', controller.create)
router.get('/:id', controller.getById)
router.get('/:nation', controller.getByNation)
router.get('/:date', controller.getByDate)
router.put('/:id/:scoreNationA/:scoreNationB', controller.updateScore)
router.delete('/:id', controller.remove)

module.exports = router
