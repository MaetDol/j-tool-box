import { MenuItem } from "./Menu.models";

export const item = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => ({
  key,
  icon,
  label,
  children,
  type,
});
