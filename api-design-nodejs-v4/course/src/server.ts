import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('hello from express')
    res.status(200)
    res.json({ message: 'hello' })
})

app.use('/api', router)

export default app