import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const result = await this.service.create(car);
     
      return this.res.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllCars() {
    const cars = await this.service.getAllCars();
    return this.res.status(200).json(cars);
  }

  public async getACar() {
    const carId = this.req.params.id;
    try {
      const car = await this.service.getACar(carId);
      if (!car) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(car);
    } catch (error) {
      this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateACar() {
    const idCar = this.req.params.id;
    
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const result = await this.service.updateACar(idCar, car);
      if (!result) {
        return this.res.status(404).json({ message: 'Car not found' });
      } 
      return this.res.status(200).json(result);
    } catch (error) {
      this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default CarController;