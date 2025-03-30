import { CheckoutResponseDTO } from "../dtos/checkout-response.dto";
import { CheckoutDTO } from "../dtos/checkout.dto";
import { Order } from "../entities/order.entity";
import { OrderRepository } from "../repositories/order.repository";
import { PricingService } from "./pricing.service";
import { StockValidator } from "./stock.service";
import { Tax } from "../entities/tax.entity";
import { Shipping } from "../entities/shipping.entity";
import { Payment } from "../entities/payment.entity";

export class CheckoutService {
  constructor(
    private orderRepository: OrderRepository,
    private stockValidator: StockValidator,
    private pricingService: PricingService,
    private tax: Tax, // Entidade
    private shipping: Shipping, // Entidade
    private payment: Payment // Entidade 
  ) {}

  async processCheckout(
    checkoutDTO: CheckoutDTO
  ): Promise<CheckoutResponseDTO> {

    await this.stockValidator.validateStock(checkoutDTO.items);

    const itemsWithProducts = await this.pricingService.getItemsWithProducts(
      checkoutDTO.items
    );

    const order = new Order(itemsWithProducts, this.tax, this.shipping);

    const paymentResult = await this.payment.processPayment({
      userId: checkoutDTO.userId,
      amount: order.getTotalPrice(),
      paymentInfo: checkoutDTO.paymentInfo,
    });

    order.changePaymentStatus(paymentResult);

    await this.orderRepository.save(order);
    const orderDTO = order.toDTO();

    return {
      orderId: "generated-order-id", 
      totalPrice: orderDTO.totalPrice,
      shippingCost: orderDTO.shippingCost,
      status: paymentResult.success,
      error: paymentResult.errorCode,
    }
  }
}
