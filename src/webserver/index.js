require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.APP_PORT || 8000

app.use(express.json());

const kutyakRouter = require('./routers/kutyakRouter');

app.use('/api/kutyak', kutyakRouter);


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})