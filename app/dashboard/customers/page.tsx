import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { fetchFilteredCustomers } from "@/app/lib/data";
export const metadata: Metadata = { title: "Customers" };

export default async function Customers({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const customers = await fetchFilteredCustomers(query);
  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
