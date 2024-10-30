import { describe, expect, it } from "vitest";
import { CompanyModel } from "../src/domains/entities/companyModel";
import { InitializeCompanyUseCase } from "../src/domains/usecases/initializeCompanyUseCase";

describe("InitializeCompanyUseCase", () => {
  it("should initialize a company", () => {
    // given
    const initializeCompanyUseCase = new InitializeCompanyUseCase();

    const expectedInitialCompany: CompanyModel = {
      name: "",
      address: "",
      phone: "",
      email: "",
      siret: "",
    };
    // when
    const initialCompany = initializeCompanyUseCase.execute();

    // then
    expect(initialCompany).toEqual(expectedInitialCompany);
  });
});
