const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json)

app.get('/todos', async (req, res) => {
    try {
       const allTodos = await pool.query('SELECT * FROM todo')
        res.json(allTodos.rows) 
    } catch (err) {
        console.log(err)
    }
    
})

app.listen(5001, () => {
    console.log("server has started on port 5001")
})