import type { ReactNode } from "react";

import { Styled } from "./Container.styles";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div style={{ width: "100%", minHeight: "calc(100vh - 100px)" }}>
      {children}
    </div>
  );
};
