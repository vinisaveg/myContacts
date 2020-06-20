import express from 'express';
import cors from 'cors';
import routes from './routes';
require('./server/db')

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api', routes)

let port: number = 3333;

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})