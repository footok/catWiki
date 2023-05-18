import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

import catRouter from './routes/cats.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3001;
const app = express();


// Have Node serve the files for our built React app
app.use(express.static(resolve(__dirname, '../client/build')));

app.use('/cats', catRouter);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
