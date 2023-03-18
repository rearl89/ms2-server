const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json())

//routes

//create
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description])
        res.json(newTodo)
    } catch (err) {
        console.log(err)
    }
    
})

app.listen(5001, () => {
    console.log("server has started on port 5001")
})