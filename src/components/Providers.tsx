import { ReactNode } from "react";
import { Toaster } from "./ui/Toaster";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
