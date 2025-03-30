export interface OrderDTO {
  items: { productId: string; quantity: number; price: number }[];
  totalPrice: number;
  shippingCost: number;
  tax: number;  
}