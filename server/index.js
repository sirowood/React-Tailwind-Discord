const cors = require('cors');
const express = require('express');
require('dotenv').config();

const unknownEndpoint = (req, res) => {
  res.redirect('/');
};

const app = express();
app.use(cors());
app.use(express.static('dist'));

app.use('/health', async (req, res) => {
  res.send('ok');
});
app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
