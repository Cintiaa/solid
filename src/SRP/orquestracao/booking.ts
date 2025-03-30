export class BookingService {
  processBooking(bookingDetails: any): void {
    if (bookingDetails.startDate >= bookingDetails.endDate) {
      throw new Error(
        "Data de check-out deve ser posterior à data de check-in."
      );
    }
    const durationInDays = Math.ceil(
      (bookingDetails.endDate.getTime() - bookingDetails.startDate.getTime) /
        (1000 * 60 * 60 * 24)
    );

    const totalPrice = bookingDetails.dailyRate * durationInDays;

    console.log(`Preço total calculado: R$ ${totalPrice}`);

    console.log(`Enviando confirmação de reserva para ${bookingDetails.email}...`);


  }
}
