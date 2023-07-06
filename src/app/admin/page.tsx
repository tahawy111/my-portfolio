"use client";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/Button";
import { toast } from "@/hooks/use-toast";
import { getAuthSession } from "@/lib/auth";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {} from "react";

export default function page() {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSignOut = () => {
    signOut().then(() => {
      router.push("/sign-in");
    });
  };
  return (
    <AdminLayout>
      <div className="flex justify-between p-10">
      <div className="">Hi {session?.user.name}</div>
      <Button onClick={handleSignOut}>Logout</Button>
      </div>
    </AdminLayout>
  );
}
