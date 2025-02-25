const express = require('express')
const path = require('path')
const mainRouter = require('./routes/mainRoutes')
const app = express()
const PORT = process.env.PORT || 3002;

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/index.html'))
// }) 

app.use(mainRouter)

app.listen(PORT, () => {
    console.log(`Server successfully started on port ${PORT}`)
})