"use client";
import { Button } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {} from "react";

export default async function page() {
  const { data: session,status } = useSession();
  const router = useRouter();
  return (
    <div>
      <div>Hi: {session?.user.name}</div>

      <Button
        onClick={() => {
          signOut().then(() => {
            router.push("/sign-in");
          });
        }}
      >
        Logout
      </Button>
    </div>
  );
}
