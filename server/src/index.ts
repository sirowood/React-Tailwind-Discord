import cors from 'cors';
import express from 'express';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.static('dist'));

app.use('/health', (_req, res) => {
  res.send('ok');
});

app.use('*', (_req, res) => {
  res.redirect('/');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
