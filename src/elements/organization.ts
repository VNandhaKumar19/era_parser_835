import { stringObject } from "../utilities/model";

const organizations: stringObject<string> = {
    'AV09311993': 'Availity',
    'ZIRMED': 'Zirmed'
};

export function OrganizationParser(value: string): string {
    value = value?.trim();
    return organizations[value] || value;
}

