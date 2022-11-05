const express = require('express')
const matchRouter =  require('./router/match.router')

const app = express()
app.use(express.json())
app.use('/api/v1/match', matchRouter)


app.listen(8087, () => console.log("Server up on port 8087"))