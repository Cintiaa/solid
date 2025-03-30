export interface CheckoutDTO {
  userId: string;
  items: { productId: string; quantity: number }[];
  address: string;
  paymentInfo: { cardNumber: string; expirationDate: string; cvv: string };
}
