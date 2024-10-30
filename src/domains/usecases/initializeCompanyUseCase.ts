import { CompanyModel } from "../entities/companyModel";

export class InitializeCompanyUseCase {
  execute(): CompanyModel {
    return {
      name: "",
      address: "",
      phone: "",
      email: "",
      siret: "",
    };
  }
}
