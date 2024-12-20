import { describe, expect, it } from "vitest";
import { LineItem } from "../src/domains/entities/billing.ts";
import { InitializeBillingUseCase } from "../src/domains/usecases/InitializeBillingUseCase.ts";

describe("InitializeBillingUseCase", () => {
  it("should initialize billing for a user", () => {
    // given
    const initializeBillingUseCase = new InitializeBillingUseCase();

    const intialBilling = {
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

    //when
    const billing = initializeBillingUseCase.execute();

    //then
    expect(billing).toEqual(intialBilling);
  });
});
