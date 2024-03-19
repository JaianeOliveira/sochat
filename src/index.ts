import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
