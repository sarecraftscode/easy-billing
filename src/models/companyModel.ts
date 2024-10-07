export type CompanyType = 'Emitting' | 'Paying';

export type CompanyModel = {
    name: string;
    type: CompanyType;
    address: string;
    phone: string;
    email: string;
    siret: string;
}