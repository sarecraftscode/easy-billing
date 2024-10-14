import { useState } from "react";
import { Billing, LineItem } from "../models/billing";

const useBilling = () => {
  const [billing, setBilling] = useState<Billing>({
    emittingCompany: {
      name: "",
      type: "Emitting",
      address: "",
      phone: "",
      email: "",
      siret: "",
    },
    payingCompany: {
      name: "",
      type: "Paying",
      address: "",
      phone: "",
      email: "",
      siret: "",
    },
    currentDate: new Date(),
    lineItems: [
      {
        description: "",
        unitPrice: 0,
        quantity: 1,
        totalPrice: 0,
      },
    ] as LineItem[],
    totalAmount: 0,
  });

  const updateTotalAmount = (name: string, value: string, index: number) => {
    const newLineItems = billing.lineItems?.flatMap((item, i) => {
      if (index === i) {
        const updatedTotalPrice = updateItemTotalPrice(name, value, item);
        return {
          ...item,
          [name]: value,
          totalPrice: updatedTotalPrice,
        };
      }
      return item;
    }) as LineItem[];

    const updatedTotalAmount = newLineItems.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    setBilling({
      ...billing,
      lineItems: newLineItems,
      totalAmount: updatedTotalAmount,
    });
  };

  const updateItemTotalPrice = (
    name: string,
    value: string,
    item: LineItem
  ) => {
    const parsedValue = parseFloat(value) || 0;
    if (name === "unitPrice") {
      return parsedValue * item.quantity;
    } else if (name === "quantity") {
      return item.unitPrice * parsedValue;
    }

    return item.unitPrice * item.quantity;
  };

  const updateCurrentDate = (value: string) => {
    setBilling({
      ...billing,
      currentDate: new Date(value),
    });
  };

  const addNewLineItem = () => {
    const newLineItem: LineItem = {
      description: "",
      unitPrice: 0,
      quantity: 1,
      totalPrice: 0,
      date: new Date(),
    };

    setBilling({
      ...billing,
      lineItems: [...(billing.lineItems || []), newLineItem],
    });
  };

  return {
    billing,
    updateTotalAmount,
    updateCurrentDate,
    addNewLineItem,
  };
};

export default useBilling;
