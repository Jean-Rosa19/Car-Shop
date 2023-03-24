import express from 'express';
import carRoutes from './Routes/carRoutes';
import motorcycleRoutes from './Routes/motorcycleRoutes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use(ErrorHandler.handle);

app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);
export default app;
