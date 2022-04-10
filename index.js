import {} from 'dotenv/config';
import express, { json } from 'express';
import db from './db.js';
import router from './routers/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(json());
app.use('/api', router);

db.sync()
	.then(() => console.log('DB connected'))
	.catch(err => console.log('Error ' + err));
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});