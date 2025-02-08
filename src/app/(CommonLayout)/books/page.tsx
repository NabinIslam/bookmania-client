import Search from "@/components/pages/books/Search";

import { Metadata } from "next";
import Sidebar from "../../../components/pages/books/Sidebar";
import Books from "../../../components/pages/books/Books";

export const metadata: Metadata = {
  title: "BookMania | Explore Books",
};



const BooksPage = () => {
  return (
    <main>
      <div className="container space-y-10 py-20">
        <Search />

        <div className="flex">
          <Sidebar />

          <Books />
        </div>
      </div>
    </main>
  );
};

export default BooksPage;
