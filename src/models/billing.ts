import { CompanyModel } from "./companyModel.ts";

export type LineItem = {
  description: string;
  unitPrice: number;
  quantity: number;
  date: Date;
  totalPrice: number;
};

export type Billing = {
  emittingCompany?: CompanyModel;
  payingCompany?: CompanyModel;
  currentDate?: Date;
  lineItems?: LineItem[];
  totalAmount?: number;
};
