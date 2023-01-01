import type { ReactNode } from "react";
import { ModalProvider } from "../../providers/ModalProvider";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <ModalProvider>
      <div
        style={{
          width: "100%",
          minHeight: "calc(100vh - 100px)",
          background: "#fff",
        }}
      >
        {children}
      </div>
    </ModalProvider>
  );
};
