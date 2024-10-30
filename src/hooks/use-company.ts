import { useState } from "react";
import { CompanyModel } from "../domains/entities/companyModel";
import { InitializeCompanyUseCase } from "../domains/usecases/initializeCompanyUseCase";

export const useCompany = () => {
  const initializeCompanyUseCase = new InitializeCompanyUseCase();

  const initialCompany = initializeCompanyUseCase.execute();

  const [company, setCompany] = useState<CompanyModel>(initialCompany);

  const updateCompany = (name: string, value: string) => {
    setCompany({
      ...company,
      [name]: value,
    });
  };

  return { company, updateCompany };
};
