import { CustomerModel } from "../entities/customerModel";

export class InitializeCustomerUseCase {
  execute(): CustomerModel {
    return {
      name: "",
      address: "",
      phone: "",
      email: "",
      siret: "",
    };
  }
}
