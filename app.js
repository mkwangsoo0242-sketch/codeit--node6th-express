import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.listen(PORT, (err) => {
  console.log(`Server Started on ${PORT}!!`);
  console.log(err);
});
