import React, { ReactNode } from "react";
import ContainerWrapper from "./container-wrapper";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <ContainerWrapper>
      <div className="px-[72px]">{children}</div>
    </ContainerWrapper>
  );
}
