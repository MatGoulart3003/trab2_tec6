const express = require('express')



const app = express()
app.use(express.json())


app.listen(8087, () => console.log("Server up on port 8087"))