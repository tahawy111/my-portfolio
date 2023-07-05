import { ReactNode } from "react";
import { Toaster } from "./ui/Toaster";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <SessionProvider>
        <Toaster />
        {children}
      </SessionProvider>
    </>
  );
}
