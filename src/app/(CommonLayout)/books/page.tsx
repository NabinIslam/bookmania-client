/* eslint-disable @typescript-eslint/no-explicit-any */
import Search from "@/components/pages/books/Search";

import { Metadata } from "next";
import Sidebar from "../../../components/pages/books/Sidebar";
import Books from "../../../components/pages/books/Books";

export const metadata: Metadata = {
  title: "BookMania | Explore Books",
};

const BooksPage = async ({ searchParams }: { searchParams: any }) => {
  const { search } = await searchParams;

  return (
    <main>
      <div className="container space-y-20 py-20">
        <Search search={search} />

        <div className="flex">
          <Sidebar />

          <Books />
        </div>
      </div>
    </main>
  );
};

export default BooksPage;
