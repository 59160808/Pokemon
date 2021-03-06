const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))

var pokemons = [
    {
      "name": "goldroger",
      "type": "Gol D. Roger"
    },
    {
      "name": "mrzero",
      "type": "Sir Crocodile"
    },
    {
      "name": "luffy",
      "type": "Monkey D. Luffy"
    }
  ]
app.get('/pokemons', (req, res) => res.send(pokemons))
app.post('/pokemons',(req,res)=>{
    pokemons.push(req.body)
    res.sendStatus(201)
})
app.listen(port, () => console.log(`Pokemon API listening on port ${port}`))