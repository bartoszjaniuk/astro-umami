import type { ReactNode } from "react";

import { Styled } from "./Container.styles";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
