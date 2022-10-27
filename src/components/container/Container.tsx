import type { ReactNode } from "react";

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
