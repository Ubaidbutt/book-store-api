const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000

const BOOKS = [
    {
        name: 'book1'
    }, 
    {
        name: 'book2'
    }
]

app.use((req, res, next) => {
    const name = req.body.name
    if (name == 'Ubaid') {
        return res.status(403).send({message: 'This name is not allowed!'})
    }
    next()
})

app.post('/testroute', (req, res) => {
    console.log('Request body: ', req.body)
    res.send({message: 'Success'})
})

app.listen(PORT, () => {
    console.log('The server is running.')
})

// backend without DB
// Frontend 
// Integration with backend