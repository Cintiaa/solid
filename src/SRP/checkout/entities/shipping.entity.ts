export class Shipping {
  calculateShipping(subtotal: number): number {
    const shippingRate = 0.05; // Taxa fixa de 5%
    return subtotal * shippingRate;
  }
}
