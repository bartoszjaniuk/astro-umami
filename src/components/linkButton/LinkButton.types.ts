import type { RoutePath } from "../nav/AppRoute.enum";

export type LinkButtonProps = {
  navigateTo: RoutePath | string;
  text: string;
  isInverted?: boolean;
};
