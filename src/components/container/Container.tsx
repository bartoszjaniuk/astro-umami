import { ReactNode, useEffect } from "react";
import { ModalProvider } from "../../providers/ModalProvider";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  useEffect(() => {
    fetch("https://umami-get-mailed.onrender.com/api/v1/app/init", {
      method: "POST",
    });
  }, []);

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
