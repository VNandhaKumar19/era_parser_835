import { stringObject } from "../utilities/model";

const organizationTypes: stringObject<string> = {
    'PE': 'payee',
    'PR': 'payer',
};

export function OrganizationTypeParser(value: string): string {
    value = value?.trim();
    return organizationTypes[value] || value;
}

