import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleODM {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.motorcycles || model('motorcycles', this.schema);
  }

  public async create(motorcycle: Motorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  public async find(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async findOne(id: string) {
    const motorcycle = this.model.findById(id);
    return motorcycle;
  }
}

export default MotorcycleODM;