import useStore from "../store/useStore.ts";
import {useState} from "react";
import {LineItem} from "../models/billing.ts";

const LineItems = () => {
    const { store } = useStore();
    const [lineItems, setLineItems] = useState<LineItem[]>([
        {
            description: '',
            unitPrice: 0,
            quantity: 1,
            totalPrice: 0
        }
    ]);

    // Handle changes in line items (description, unitPrice, quantity)
    const handleLineItemChange = (event, index) => {
        const { name, value } = event.target;
        store.updateTotalAmount(name, value, index);
    };

    return (
        <div className="center">
            <h3>Line items</h3>
            <table className="center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
                </thead>
                <tbody>
                {lineItems?.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                id="description"
                                name="description"
                                type="text"
                                value={item.description}
                                onChange={(e) => handleLineItemChange(e, index)}
                            />
                        </td>
                        <td>
                            <input
                                id="unitPrice"
                                name="unitPrice"
                                type="number"
                                value={item.unitPrice}
                                onChange={(e) => handleLineItemChange(e, index)}
                            />
                        </td>
                        <td>
                            <input
                                id="quantity"
                                name="quantity"
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleLineItemChange(e, index)}
                            />
                        </td>
                        <td>{item.totalPrice}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default LineItems;