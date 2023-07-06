"use client";
import Loading from "@/components/Loading";
import SignIn from "@/components/Signin";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.user.email) {
      router.push("/admin");
    }
  }, [session]);

  if (session === undefined && status === "loading") {
    return <Loading />;
  }

  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link
          href={`/`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -mt-20"
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Home
        </Link>

        <SignIn />
      </div>
    </div>
  );
}
