import ICar from '../Interfaces/ICar';

class Car {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    {
      model,
      year,
      color,
      buyValue,
      doorsQty,
      seatsQty,
      status,
      id, 
    } : ICar,
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
    this.id = id;
    this.status = status || false;
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