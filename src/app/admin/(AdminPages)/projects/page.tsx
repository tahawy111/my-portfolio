import AdminLayout from "@/components/AdminLayout";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import {} from "react";

interface pageProps {}

export default function page({}: pageProps) {
  return (
    <AdminLayout>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold my-3">Projects</h1>
        <Link
          href={`/admin/projects/add`}
          className={cn(buttonVariants({ variant: "outline" }),"font-bold")}
        >
          Add New Project <PlusCircle className="mx-1" />
        </Link>
      </div>
    </AdminLayout>
  );
}
