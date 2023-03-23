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
    const carOdm = new CarODM();
    const cars = await carOdm.find();
    const carArray = cars.map((car) =>
      this.createCarDomain(car));
    return carArray;
  }

  public async getACar(carId: string) {
    const carOdm = new CarODM();
    const car = await carOdm.findOne(carId);
    if (!car) {
      return null; 
    }
    const carResult = this.createCarDomain(car);
    return carResult;
  }
}

export default CarService;