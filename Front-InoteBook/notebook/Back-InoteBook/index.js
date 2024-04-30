const connectToMongoDB = require("./db")
var cors = require('cors')

connectToMongoDB();
const express = require('express')
const app = express()

const port = 8000


app.use(cors())

//----This is important beacuse we can not define then they throw the api error name is not define and all-----
app.use(express.json());

//Available Routes-
app.use('/api/auth', require("./routes/auth"));
app.use('/api/notes', require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
