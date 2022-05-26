require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.APP_PORT || 8000;

const corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
app.use(express.json());

const kutyakRouter = require('./routers/kutyakRouter');

app.use('/api/kutyak', kutyakRouter);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})