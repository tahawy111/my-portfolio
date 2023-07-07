"use client"
import { ReactNode } from "react";
import { Toaster } from "./ui/Toaster";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <Toaster />
          {children}
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
