import { CompanyModel } from "./companyModel.ts";

export type LineItem = {
  description: string;
  unitPrice: number;
  quantity: number;
  date: Date;
  totalPrice: number;
  vat?: number;
};

export type Billing = {
  company?: CompanyModel;
  customer?: CompanyModel;
  currentDate?: Date;
  lineItems?: LineItem[];
  totalAmount?: number;
  paymentDelay?: number;
};
