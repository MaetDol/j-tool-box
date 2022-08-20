import { Properties } from "components/PropertyItems";

export const ContentsType = {
  Image: 1,
  Youtube: 2,
} as const;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export declare type ContentsType =
  typeof ContentsType[keyof typeof ContentsType];

export const LinkType = {
  None: 0,
  Inner: 1,
  Outer: 2,
} as const;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export declare type LinkType = typeof LinkType[keyof typeof LinkType];

export type ContentsBlockData = {
  contentsType: ContentsType;
  contentsUrl: string;
  linkType: typeof LinkType[keyof typeof LinkType];
  linkUrl: string;
  eventName: string;
  eventProperties: Properties;
  id?: number;
};
