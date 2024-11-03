import {
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { CustomerModel } from "../domains/entities/customerModel.ts";

interface CustomerProps {
  customer: CustomerModel;
  updateCustomer: (name: string, value: string) => void;
}

const Customer = ({ customer, updateCustomer }: CustomerProps) => {
  return (
    <VStack spacing="3" alignItems="flex-start">
      <Heading size="1xs">Société payeuse</Heading>
      <SimpleGrid columns={2} columnGap={3} rowGap="6" w="full">
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Nom</FormLabel>
            <Input
              placeholder="Boulevard"
              onChange={(e) => updateCustomer("name", e.target.value)}
              value={customer.name}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>SIRET</FormLabel>
            <Input
              placeholder="33333333333333"
              value={customer.siret}
              onChange={(e) => updateCustomer("siret", e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Téléphone</FormLabel>
            <Input
              type="tel"
              placeholder="06000000"
              value={customer.phone}
              onChange={(e) => updateCustomer("phone", e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="test@test.com"
              value={customer.email}
              onChange={(e) => updateCustomer("email", e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Adresse</FormLabel>
            <Input
              placeholder="33 rue du père noel"
              value={customer.address}
              onChange={(e) => updateCustomer("address", e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Ville</FormLabel>
            <Input placeholder="Lyon" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Pays</FormLabel>
            <Select>
              <option value="France">France</option>
            </Select>
          </FormControl>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Customer;
