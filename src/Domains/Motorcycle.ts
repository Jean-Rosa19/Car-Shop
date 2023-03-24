import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  id?: string | undefined;
  protected model: string;
  year: number;
  color: string;
  status?: boolean | undefined;
  buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(
    {
      id,
      model,
      year,
      color,
      status,
      buyValue,
      category,
      engineCapacity,
    } : IMotorcycle,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;