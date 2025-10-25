import express, { Application } from 'express';
import userRoute from './user.route';
// =============================
// Express App Setup
// =============================
const app: Application = express();

app.use('/api/v1', (req, res) => {  return res.send('Welcome to Bookstore API v1'); });
app.use('/api/v1/users', userRoute);

export { app };