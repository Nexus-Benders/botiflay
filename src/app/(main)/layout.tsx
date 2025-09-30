import ContainerWrapper from "@/_components/layout/container-wrapper";
import Navbar from "@/_components/navbar/navbar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <ContainerWrapper>
      <Navbar />
      {children}
    </ContainerWrapper>
  );
}
