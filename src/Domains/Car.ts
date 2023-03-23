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

  // public setId(id: string) {
  //   this.id = id;
  // }
  
  // public getId() {
  //   return this.id;
  // }

  // public setModel(model: string) {
  //   this.model = model;
  // }
  
  // public getModel() {
  //   return this.model;
  // }

  // public getYear() {
  //   return this.year;
  // }

  // public setYear(year: number) {
  //   this.year = year;
  // }
  
  // public getColor() {
  //   return this.color;
  // }

  // public setColor(color: string) {
  //   this.color = color;
  // }
  
  // public getStatus() {
  //   return this.status;
  // }

  // public setStatus(status: boolean) {
  //   this.status = status;
  // }
  
  // public getBuyValue() {
  //   return this.buyValue;
  // }

  // public setBuyValue(buyValue: number) {
  //   this.buyValue = buyValue;
  // }
  
  // public getDoorsQty() {
  //   return this.doorsQty;
  // }

  // public setDoorsQty(doorsQty: number) {
  //   this.doorsQty = doorsQty;
  // }
  
  // public getSeatsQty() {
  //   return this.seatsQty;
  // }

  // public setSeatsQty(seatsQty: number) {
  //   this.seatsQty = seatsQty;
  // }
}

export default Car;