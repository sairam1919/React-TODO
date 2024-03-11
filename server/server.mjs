import express from 'express'
import http from 'http'
import bodyParser from 'body-parser';
import loginRouter from './Routes/login.mjs';
import todoDataRouter from './Routes/todoData.mjs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.json());

// Allow all origins
app.use(cors({ origin: '*' }));

app.use('/login', loginRouter);
app.use('/todo', todoDataRouter);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const server = http.createServer(app);

server.listen(3005, () => {
    console.log("Server Started on Port ::: 3005");
});

