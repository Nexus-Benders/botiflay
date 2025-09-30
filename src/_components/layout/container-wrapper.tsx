import React, { ReactNode } from "react";

export default function ContainerWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="container mx-auto max-w-[1440px]">{children}</div>;
}
