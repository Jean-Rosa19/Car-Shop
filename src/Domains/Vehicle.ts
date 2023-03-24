import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  public id?: string | undefined;
  protected model: string;
  public year: number;
  public color: string;
  public status?: boolean | undefined;
  public buyValue: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
  }: IVehicle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
  }
}
export default Vehicle;