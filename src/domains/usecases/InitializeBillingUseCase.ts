import { Billing, LineItem } from "../entities/billing";

export class InitializeBillingUseCase {
  execute(): Billing {
    return {
      currentDate: new Date(),
      lineItems: [
        {
          description: "",
          unitPrice: 0,
          quantity: 1,
          date: new Date(),
          totalPrice: 0,
        },
      ] as LineItem[],
      totalAmount: 0,
    };
  }
}
