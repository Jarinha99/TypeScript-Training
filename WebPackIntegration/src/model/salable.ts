export default interface Salable {
  name: string;
  price: number;
  descount: number;
  priceWithDescount(): number;
}
