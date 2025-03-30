export interface PaymentResult {
  success: "success" | "failed";
  errorCode?: string;
}

export class Payment {
  async processPayment(paymentDTO: {
    userId: string;
    amount: number;
    paymentInfo: { cardNumber: string; expirationDate: string; cvv: string };
  }): Promise<PaymentResult> {
    if (!paymentDTO.userId) {
      return {
        success: "failed",
        errorCode: "USER_ID_REQUIRED",
      };
    }
    if (!paymentDTO.amount || paymentDTO.amount <= 0) {
      return {
        success: "failed",
        errorCode: "INVALID_AMOUNT",
      };
    }
    
    if (!paymentDTO.paymentInfo.cardNumber) {
      return {
        success: "failed",
        errorCode: "CARD_NUMBER_REQUIRED",
      };
    }

    if (!paymentDTO.paymentInfo.expirationDate) {
      return {
        success: "failed",
        errorCode: "EXPIRATION_DATE_REQUIRED",
      };
    }

    if (!paymentDTO.paymentInfo.cvv) {
      return {
        success: "failed",
        errorCode: "CVV_REQUIRED",
      };
    }

    if (paymentDTO.paymentInfo.cardNumber === "1234567890123456") {
      return {
        success: "failed",
        errorCode: "PAYMENT_DECLINED",
      };
    }

    return { success: "success" };
  }
}
