import express from 'express';
import routes from './Routes/Routes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use('/cars', routes);
app.use(ErrorHandler.handle);

export default app;
