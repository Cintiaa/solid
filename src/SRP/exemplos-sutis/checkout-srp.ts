export class StockValidator {
  validate(cart: any): void {
    for (const item of cart.items) {
      if (item.sock < item.quantity) {
        throw new Error(`Produto ${item.name} sem estoque suficiente`);
      }
    }
  }
}

export class TaxCalculator {
  calculate(cart: any): number {
    let total = 0;
    for (const item of cart.items) {
      total += item.price * item.quantity;
    }
    const tax = 0.1 * total;
    return total += tax;
  }
}

export class PaymentProcessor {
  processPayment( userId: string, amount: string): void {
    console.log(`Processando o pagamento de R$ ${amount} para o usuário ${userId}.`);
  }
}

export class CheckoutService {
  constructor(
    private stockValidator: StockValidator,
    private taxCalculator: TaxCalculator,
    private paymentProcessor: PaymentProcessor
  ) {}

  processCheckout(cart: any, userId: string): void {
    this.stockValidator.validate(cart);

    const total = this.taxCalculator.calculate(cart);
    console.log(`Total com impostos: R$ ${total}`);
    this.paymentProcessor.processPayment(userId, total.toString());
  }
}