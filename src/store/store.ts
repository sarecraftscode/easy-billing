import { LineItem } from "../domains/entities/billing.ts";

class Store {
  billing = {
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
  };

  generatePdf() {
    console.log(this.billing);
  }

  addNewLineItem() {
    const newLineItem: LineItem = {
      description: "",
      unitPrice: 0,
      quantity: 1,
      totalPrice: 0,
      date: new Date(),
    };

    // Add the new line item and update the billing signal
    this.billing = {
      ...this.billing,
      lineItems: [...this.billing.lineItems, newLineItem],
    };

    console.log("LineItems rendered", store.billing.lineItems);
  }

  updateItemTotalPrice(name: string, value: string, item: LineItem) {
    const parsedValue = parseFloat(value) || 0; // Ensure values are parsed to numbers
    if (name === "unitPrice") {
      return parsedValue * item.quantity;
    } else if (name === "quantity") {
      return item.unitPrice * parsedValue;
    }

    return item.unitPrice * item.quantity;
  }

  updateCurrentDate(value: string) {
    // Safely update the billing with the new currentDate
    this.billing = {
      ...this.billing,
      currentDate: new Date(value),
    };
  }

  updateTotalAmount(name: string, value: string, index: number) {
    // Update line items and total amount
    const newLineItems = this.billing.lineItems?.flatMap((item, i) => {
      if (index === i) {
        // Update the specific item and calculate its new total price
        const updatedTotalPrice = this.updateItemTotalPrice(name, value, item);
        return {
          ...item,
          [name]: value, // Update the specific field
          totalPrice: updatedTotalPrice, // Update the total price
        };
      }
      return item;
    }) as LineItem[];

    // Calculate the total amount for all line items
    const updatedTotalAmount = newLineItems.reduce(
      (total, item) => total + item.totalPrice,
      0
    );

    // Update the entire billing object with new line items and total amount
    this.billing = {
      ...this.billing,
      lineItems: newLineItems,
      totalAmount: updatedTotalAmount,
    };
  }
}

export const store = new Store();
