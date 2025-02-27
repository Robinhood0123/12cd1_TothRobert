const express =  require('express')
const app = express()
const bodyparser = require('body-parser')


app.use(bodyparser.json())

app.get("/",(req, res) => {
    res.send("Mukodik a szerver.")
})

app.listen(3000, () =>  {
    console.log('A teli olimpia szervere a 3000-es porton fut.')
}) 

