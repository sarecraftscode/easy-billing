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
import { useState } from "react";
import { CompanyModel, CompanyType } from "../models/companyModel.ts";

interface CompanyProps {
  type: CompanyType;
}

const Company = ({ type }: CompanyProps) => {
  const [company, setCompany] = useState<CompanyModel>({
    name: "",
    type: type,
    address: "",
    phone: "",
    email: "",
    siret: "",
  });

  return (
    <VStack spacing="3" alignItems="flex-start">
      <Heading size="1xs">
        Société {type === "Emitting" ? "émettrice" : "payeuse"}
      </Heading>
      <SimpleGrid columns={2} columnGap={3} rowGap="6" w="full">
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Nom</FormLabel>
            <Input
              placeholder="Boulevard"
              onChange={(e) => setCompany({ ...company, name: e.target.value })}
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
              onChange={(e) =>
                setCompany({ ...company, siret: e.target.value })
              }
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
              onChange={(e) =>
                setCompany({ ...company, phone: e.target.value })
              }
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
              onChange={(e) =>
                setCompany({ ...company, email: e.target.value })
              }
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Adresse</FormLabel>
            <Input
              placeholder="33 rue du père noel"
              value={company.address}
              onChange={(e) =>
                setCompany({ ...company, address: e.target.value })
              }
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
