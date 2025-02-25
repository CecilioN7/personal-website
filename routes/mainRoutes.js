const express = require('express')
const path = require('path')

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.get('/visitors', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/visitors.html'));
})

module.exports = router