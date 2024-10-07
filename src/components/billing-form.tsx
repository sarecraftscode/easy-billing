import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Billing, LineItem } from "../models/billing.ts";
import Company from "./company.tsx";

const BillingForm = () => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

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
    };

    setBilling({
      ...billing,
      lineItems: [...billing.lineItems, newLineItem],
    });
  };

  const formatAmount = (amount: number | undefined): string => {
    if (!amount) return "0,00 €";
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  return (
    <Flex h="100vh" py={[10, 10]} padding={10}>
      <Box
        as="form"
        onSubmit={handleSubmit}
        w="full"
        maxW="1200px"
        p={[5, 10]}
        boxShadow="md"
        borderRadius="md"
      >
        <Flex w="full" mb={10} flexDirection={["column", "row"]}>
          <VStack w="full" spacing={4} alignItems="flex-start">
            <Company type="Emitting" />
          </VStack>

          <VStack w="full" spacing={4} alignItems="flex-start" mt={[4, 0]}>
            <Company type="Paying" />
          </VStack>
        </Flex>

        <VStack w="min" mb={10}>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              value={billing.currentDate?.toISOString().slice(0, 10)}
              onChange={(e) => updateCurrentDate(e.target.value)}
            />
          </FormControl>
        </VStack>

        <VStack w="full" mb={10} spacing={4} alignItems="flex-start">
          <Heading size="md">Lignes</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Désignation</Th>
                <Th>Date</Th>
                <Th>Quantité</Th>
                <Th>PU HT</Th>
                <Th>Total HT</Th>
              </Tr>
            </Thead>
            <Tbody>
              {billing.lineItems?.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <Input
                      id="description"
                      name="description"
                      type="text"
                      value={item.description}
                      onChange={(e) =>
                        updateTotalAmount(e.target.name, e.target.value, index)
                      }
                    />
                  </Td>
                  <Td w="1%">
                    <Input
                      id="prestatationDate"
                      name="prestatationDate"
                      type="date"
                      value={item.date?.toISOString().slice(0, 10)}
                      onChange={(e) =>
                        updateTotalAmount(e.target.name, e.target.value, index)
                      }
                    />
                  </Td>
                  <Td w="5%">
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      value={item.quantity}
                      size="sm"
                      onChange={(e) =>
                        updateTotalAmount(e.target.name, e.target.value, index)
                      }
                    />
                  </Td>
                  <Td w="15%">
                    <Input
                      id="unitPrice"
                      name="unitPrice"
                      type="number"
                      value={item.unitPrice}
                      onChange={(e) =>
                        updateTotalAmount(e.target.name, e.target.value, index)
                      }
                    />
                  </Td>
                  <Td>{formatAmount(item.totalPrice)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>

        <VStack w="full" mb={10} spacing={4} alignItems="flex-start">
          <Heading size="md">
            Montant total: {formatAmount(billing.totalAmount)}{" "}
          </Heading>
        </VStack>

        <VStack w="full" mb={10} spacing={4} alignItems="flex-start">
          <Button colorScheme="blue" onClick={addNewLineItem}>
            Ajouter une ligne
          </Button>
        </VStack>

        <VStack w="full" spacing={4} alignItems="flex-start">
          <Button type="submit" colorScheme="green">
            Générer la facture
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default BillingForm;
