import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import formatAmount from "../helpers/format-amount.ts";
import useBilling from "../hooks/use-billing.ts";
import { useCompany } from "../hooks/use-company.ts";
import { useCustomer } from "../hooks/use-customer.ts";
import BillingPreview from "./billing-preview.tsx";
import Company from "./company.tsx";
import Customer from "./customer.tsx";

const BillingForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { company, updateCompany } = useCompany();
  const { customer, updateCustomer } = useCustomer();
  const { billing, updateTotalAmount, updateCurrentDate, addNewLineItem } =
    useBilling();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onOpen();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <BillingPreview
              company={company}
              customer={customer}
              billing={billing}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
          <VStack w="full" alignItems="flex-start" mb={10}>
            <Heading size="1xl">Facture N°0001</Heading>
          </VStack>
          <Flex w="full" mb={10} flexDirection={["column", "row"]}>
            <VStack
              w="container.md"
              spacing={4}
              alignItems="flex-start"
              margin="5"
            >
              <Company company={company} updateCompany={updateCompany} />
            </VStack>

            <VStack
              w="container.md"
              spacing={4}
              alignItems="flex-start"
              margin="5"
            >
              <Customer customer={customer} updateCustomer={updateCustomer} />
            </VStack>
          </Flex>

          <VStack w="min" mb={10}>
            <FormControl>
              <FormLabel>Date d'émission</FormLabel>
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
                          updateTotalAmount(
                            e.target.name,
                            e.target.value,
                            index
                          )
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
                          updateTotalAmount(
                            e.target.name,
                            e.target.value,
                            index
                          )
                        }
                      />
                    </Td>
                    <Td w="10%">
                      <Input
                        id="quantity"
                        name="quantity"
                        type="number"
                        value={item.quantity}
                        size="sm"
                        onChange={(e) =>
                          updateTotalAmount(
                            e.target.name,
                            e.target.value,
                            index
                          )
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
                          updateTotalAmount(
                            e.target.name,
                            e.target.value,
                            index
                          )
                        }
                      />
                    </Td>
                    <Td>{formatAmount(item.totalPrice)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </VStack>

          <VStack w="full" mb={10} spacing={4} alignItems="flex-end">
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
    </>
  );
};

export default BillingForm;
