import { splitElement } from "../utilities/split_element";

export function ServiceCodeParser(value: string): string {
    if (!value) return '';
    const splitValue: string[] = splitElement(value);
    const code: string = splitValue[1] || "";
    return code;
}
