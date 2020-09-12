const express = require('express');
const path = require('path');
const axios = require('axios');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get()
// axios stuff

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`)
});