import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.cars || model('cars', this.schema);
  }

  public async create(car: Car): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findOne(id: string) {
    const car = this.model.findById(id);
    return car;
  }

  public async update(idCar:string, data: ICar) {
    const car = this.model.findByIdAndUpdate(idCar, data, { new: true });
    return car;
  }
}

export default CarODM;