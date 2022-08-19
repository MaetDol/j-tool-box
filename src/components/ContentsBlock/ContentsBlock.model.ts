export const ContentsType = {
  Image: 1,
  Youtube: 2,
} as const;

export const LinkType = {
  None: 0,
  Inner: 1,
  Outer: 2,
} as const;

export type ContentsBlockData = {
  contentsType: typeof ContentsType[keyof typeof ContentsType];
  contentsUrl: string;
  linkType: typeof LinkType[keyof typeof LinkType];
  linkUrl: string;
  eventName: string;
  eventProperties: Object;
};
