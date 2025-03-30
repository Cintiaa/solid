export class BookingValidator {
  validateBooking(bookingDetails: any): void {
    if (bookingDetails.startDate >= bookingDetails.endDate) {
      throw new Error(
        "Data de check-out deve ser posterior à data de check-in."
      );
    }
  }
}

export class BookingPriceCalculator {
  calculatePrice(bookingDetails: any): number {
    return Math.ceil(
      (bookingDetails.endDate.getTime() - bookingDetails.startDate.getTime) /
        (1000 * 60 * 60 * 24)
    );
  }
}

export class EmailService {
  sendEmail(email: string, message: string): void {
    console.log(`Enviando confirmação de reserva para ${email}...`);
    console.log(message);
  }
}

export class BookingService {
  constructor(
    private bookingValidator: BookingValidator,
    private bookingPriceCalculator: BookingPriceCalculator,
    private emailService: EmailService
  ) {}

  processBooking(bookingDetails: any): void {
    this.bookingValidator.validateBooking(bookingDetails);

    const durationInDays = this.bookingPriceCalculator.calculatePrice(
      bookingDetails
    );
    const totalPrice = bookingDetails.dailyRate * durationInDays;

    console.log(`Preço total calculado: R$ ${totalPrice}`);

    const message = `Sua reserva foi confirmada. Preço total: R$ ${totalPrice}`;
    this.emailService.sendEmail(bookingDetails.email, message);
    console.log("Reserva processada com sucesso.");  
  }
}
