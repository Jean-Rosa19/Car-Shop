import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IError from '../Interfaces/IError';
import CarODM from '../Models/CarODM';

class CarService {
  private model: CarODM;

  constructor() {
    this.model = new CarODM();
  }
  private createCarDomain(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  public async create(newCar: ICar): Promise<Car | IError> {
    const car = this.createCarDomain(newCar);
    if (!car) {
      throw new Error('incomplete fields');
    }
    return new Car(await this.model.create(car));
  }

  public async getAllCars() {
    const cars = await this.model.find();
    const carArray = cars.map((car) =>
      this.createCarDomain(car));
    return carArray;
  }

  public async getACar(id: string) {
    const car = await this.model.findOne(id);
    if (!car) return null; 
 
    return new Car(car);
  }
}

export default CarService;