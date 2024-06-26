import { splitElement } from "../utilities/split_element";

export function ServiceQualifierParser(value: string): string {
    if (!value) return '';
    const splitValue: string[] = splitElement(value);
    const qualifier: string = splitValue[0] || "";
    return qualifier;
}