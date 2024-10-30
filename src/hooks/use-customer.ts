import { useState } from "react";
import { CustomerModel } from "../domains/entities/customerModel";
import { InitializeCustomerUseCase } from "../domains/usecases/initializeCustomerUseCase";

export const useCustomer = () => {
  const initializeCustomerUseCase = new InitializeCustomerUseCase();

  const initialCustomer = initializeCustomerUseCase.execute();

  const [customer, setCustomer] = useState<CustomerModel>(initialCustomer);

  const updateCustomer = (name: string, value: string) => {
    setCustomer({
      ...customer,
      [name]: value,
    });
  };

  return { customer, updateCustomer };
};
