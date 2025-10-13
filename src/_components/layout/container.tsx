import React, { ReactNode } from "react";
import ContainerWrapper from "./container-wrapper";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <ContainerWrapper>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[72px]">{children}</div>
    </ContainerWrapper>
  );
}
