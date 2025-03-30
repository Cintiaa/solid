export class CheckoutService {
  processCheckout(cart: any, userId: string): void {
    for (const item of cart.items) {
      if (item.sock < item.quantity) {
        throw new Error(`Produto ${item.name} sem estoque suficiente`);
      }
    }

    let total = 0;
    for (const item of cart.items) {
      total += item.price * item.quantity;
    }

    const tax = 0.1 * total;
    total += tax;

    console.log(`Total com impostos: R$ ${total}`);
    console.log(`Processando o pagamento para o usuário ${userId}.`);
  }
}
