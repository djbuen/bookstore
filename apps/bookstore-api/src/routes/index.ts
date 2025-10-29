import express, { Application } from 'express';
import cors from 'cors';
import userRoute from './user.route';
import bookRoute from './book.route';
import favoriteRoute from './favorite.route';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.get('/api/v1', (req, res) => {  return res.send('Welcome to Bookstore API v1'); });
app.use('/api/v1/users', userRoute);
app.use('/api/v1/books', bookRoute);
app.use('/api/v1/favorites', favoriteRoute);

export { app };