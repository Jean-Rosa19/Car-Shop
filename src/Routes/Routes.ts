import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();  

routes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/', 
  (req, res, next) => new CarController(req, res, next).findAllCars(),
);
routes.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).getACar(),
);

routes.put(
  '/:id', 
  (req, res, next) => new CarController(req, res, next).updateACar(),
);

export default routes;