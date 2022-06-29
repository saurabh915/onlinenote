const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "stagin") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
 }
// Available Routes
app.use('/api/auth', require('./api/auth'))
app.use('/api/notes', require('./api/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})