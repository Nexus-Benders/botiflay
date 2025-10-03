import { ReactNode } from "react";
import Container from "../layout/container";

export default function BlackBgSections({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#1B1B1B] text-white">
      <Container>{children}</Container>
    </div>
  );
}
