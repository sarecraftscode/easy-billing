import { describe, expect, it } from "vitest";
import { CustomerModel } from "../src/domains/entities/customerModel";
import { InitializeCustomerUseCase } from "../src/domains/usecases/initializeCustomerUseCase";

describe("InitializeCustomerUseCase", () => {
  it("should initialize a Customer", () => {
    // given
    const initializeCustomerUseCase = new InitializeCustomerUseCase();

    const expectedInitialCustomer: CustomerModel = {
      name: "",
      address: "",
      phone: "",
      email: "",
      siret: "",
    };
    // when
    const initialCustomer = initializeCustomerUseCase.execute();

    // then
    expect(initialCustomer).toEqual(expectedInitialCustomer);
  });
});
