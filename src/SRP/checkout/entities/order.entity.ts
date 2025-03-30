import { OrderDTO } from "../dtos/order.dto";
import { PaymentResult } from "./payment.entity";
import { Product } from "./product.entity";
import { Shipping } from "./shipping.entity";
import { Tax } from "./tax.entity";

export class Order {
  private subtotal: number;
  private tax: number;
  private shippingCost: number;
  private paymentStatus: string = "pending";
  private paymentError: string | null = null;

  constructor(
    private items: { product: Product; quantity: number }[],
    tax: Tax,
    shipping: Shipping
  ) {
    this.subtotal = this.calculateSubtotal();
    this.tax = tax.calculateTax(this.subtotal);
    this.shippingCost = shipping.calculateShipping(this.subtotal);
  }

  private calculateSubtotal(): number {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  getTotalPrice(): number {
    return this.subtotal + this.tax + this.shippingCost;
  }

  changePaymentStatus(paymentResult: PaymentResult): void {
    this.paymentStatus = paymentResult.success;
    this.paymentError = `Erro ao processar pagamento: ${paymentResult.errorCode}`;
  }

  toDTO(): OrderDTO {
    return {
      items: this.items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
      })),
      totalPrice: this.getTotalPrice(),
      shippingCost: this.shippingCost,
      tax: this.tax,
    };
  }
}
