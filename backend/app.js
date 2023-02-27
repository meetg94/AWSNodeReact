const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Hello AWS EC2'
    })
})

app.listen(3000)