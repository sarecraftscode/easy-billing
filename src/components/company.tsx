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
import { CompanyModel } from "../domains/entities/companyModel.ts";

interface CompanyProps {
  company: CompanyModel;
  updateCompany: (name: string, value: string) => void;
}

const Company = ({ company, updateCompany }: CompanyProps) => {
  return (
    <VStack spacing="3" alignItems="flex-start">
      <Heading size="1xs">Société émettrice</Heading>
      <SimpleGrid columns={2} columnGap={3} rowGap="6" w="full">
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Nom</FormLabel>
            <Input
              placeholder="Boulevard"
              onChange={(e) => updateCompany("name", e.target.value)}
              value={company.name}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>SIRET</FormLabel>
            <Input
              placeholder="33333333333333 "
              value={company.siret}
              onChange={(e) => updateCompany("siret", e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Téléphone</FormLabel>
            <Input
              type="tel"
              placeholder="06000000"
              value={company.phone}
              onChange={(e) => updateCompany("phone", e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="test@test.com"
              value={company.email}
              onChange={(e) => updateCompany("email", e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Adresse</FormLabel>
            <Input
              placeholder="33 rue du père noel"
              value={company.address}
              onChange={(e) => updateCompany("address", e.target.value)}
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

export default Company;
