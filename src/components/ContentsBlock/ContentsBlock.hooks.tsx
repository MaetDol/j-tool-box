import { Antd } from "components";

export function toRadioOptions(obj: Object): Antd.CheckboxOptionType[] {
    return Object.entries(obj)
        .map(([label, value]) => ({ label, value }));
}