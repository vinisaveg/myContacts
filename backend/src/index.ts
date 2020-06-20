import express from 'express';
import cors from 'cors';
import routes from './routes';
import mongoose from 'mongoose'

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api', routes)

mongoose.connect('mongodb://localhost:27017/myContacts', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

let port: number = 3333;

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})