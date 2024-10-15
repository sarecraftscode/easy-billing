export type CompanyType = "Company" | "Customer";

export type CompanyModel = {
  name: string;
  type: CompanyType;
  address: string;
  phone: string;
  email: string;
  siret: string;
  vat?: string;
  iban?: string;
  legalForm?: string;
  ape?: string;
  regNumber?: string;
};
