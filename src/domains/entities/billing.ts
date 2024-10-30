export type LineItem = {
  description: string;
  unitPrice: number;
  quantity: number;
  date: Date;
  totalPrice: number;
  vat?: number;
};

export type Billing = {
  currentDate?: Date;
  lineItems?: LineItem[];
  totalAmount?: number;
  paymentDelay?: number;
};
