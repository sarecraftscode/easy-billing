import { Billing, LineItem } from "../../models/billing";

export class InitializeBillingUseCase {
  execute(): Billing {
    return {
      emittingCompany: {
        name: "",
        type: "Emitting",
        address: "",
        phone: "",
        email: "",
        siret: "",
      },
      payingCompany: {
        name: "",
        type: "Paying",
        address: "",
        phone: "",
        email: "",
        siret: "",
      },
      currentDate: new Date(),
      lineItems: [
        {
          description: "",
          unitPrice: 0,
          quantity: 1,
          totalPrice: 0,
        },
      ] as LineItem[],
      totalAmount: 0,
    };
  }
}
