import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IError from '../Interfaces/IError';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private model: MotorcycleODM;

  constructor() {
    this.model = new MotorcycleODM();
  }
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }
  public async create(newMotorcycle: IMotorcycle): Promise<Motorcycle | IError> {
    const motorcycle = this.createMotorcycleDomain(newMotorcycle);
    if (!motorcycle) {
      throw new Error('incomplete fields');
    }
    return new Motorcycle(await this.model.create(motorcycle));
  }

  public async findAll() {
    const motorcycle = await this.model.find();
    const motorcycleArray = motorcycle.map((motors) =>
      this.createMotorcycleDomain(motors));
    return motorcycleArray;
  }

  public async findOne(id: string) {
    const motorcycle = await this.model.findOne(id);
    if (!motorcycle) return null; 
 
    return new Motorcycle(motorcycle);
  }
}

export default MotorcycleService;