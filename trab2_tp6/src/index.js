const express = require('express')
const nationRouter =  require('./router/nation.router')
//const gameRouter = require('./router/game.router')

const app = express()
app.use(express.json())
app.use('/api/v1/nation', nationRouter)
//app.use('/api/v1/game', gameRouter)

app.listen(8087, () => console.log("Server up on port 8087"))