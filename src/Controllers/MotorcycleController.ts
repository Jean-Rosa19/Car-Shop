import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleControler {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const result = await this.service.create(motorcycle);
      return this.res.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }
  public async findAll() {
    const motorcycles = await this.service.findAll();
    return this.res.status(200).json(motorcycles);
  }

  public async findOne() {
    const motorcycleId = this.req.params.id;
    try {
      const motorcycle = await this.service.findOne(motorcycleId);
      if (!motorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcycleControler;