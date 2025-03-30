import { Order } from "../entities/order.entity";

export class OrderRepository {
  async save(order: Order): Promise<void> {
    console.log(`Pedido salvo no banco de dados: ${order}`);
  }
}