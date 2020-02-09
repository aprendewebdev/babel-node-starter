import express from 'express';
import getMessage from './getMessage';

var app = express();

var port = 4000;

app.get('/', async (req, res) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('waiting - ');
      resolve(true);
    }, 1000);
  });

  res.send({
    message: getMessage(),
  })
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});