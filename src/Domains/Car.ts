import ICar from '../Interfaces/ICar';

class Car {
  id?: string | undefined;
  protected model: string;
  year: number;
  color: string;
  status: boolean;
  buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    {
      id,
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty, 
    } : ICar,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
}

export default Car;