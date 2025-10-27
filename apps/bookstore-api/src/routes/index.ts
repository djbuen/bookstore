import express, { Application } from 'express';
import userRoute from './user.route';
import bookRoute from './book.route';
import favoriteRoute from './favorite.route';
// =============================
// Express App Setup
// =============================
const app: Application = express();

app.get('/api/v1', (req, res) => {  return res.send('Welcome to Bookstore API v1'); });
app.use('/api/v1/users', userRoute);
app.use('/api/v1/books', bookRoute);
app.use('/api/v1/favorites', favoriteRoute);

export { app };