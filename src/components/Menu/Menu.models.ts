import { MenuProps } from "antd";
import { URLs } from "routing";
import { item } from "./Menu.utils";

export type MenuItem = Required<MenuProps>["items"][number];

export const items = [
  item("Home", URLs.HOME),
  item("Program", URLs.PROGRAM, null, [
    item("QnA", URLs.PROGRAM_QNA),
    item("Contents Block", URLs.PROGRAM_CONTENTS_BLOCK),
    item("Card", URLs.PROGRAM_CARD),
  ]),
];
