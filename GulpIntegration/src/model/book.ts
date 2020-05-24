import Salable from "./salable";

export default class Book implements Salable {
  constructor(
    public name: string,
    public readonly price: number,
    public readonly descount: number
  ) {}

  priceWithDescount(): number {
    return this.price * (this.descount / 100);
  }
}
