/* eslint-disable @typescript-eslint/no-explicit-any */
import Search from "@/components/pages/books/Search";
import SearchedBooks from "@/components/pages/books/SearchedBooks";

const ResultsPage = ({ searchParams }: { searchParams: any }) => {
  const { search } = searchParams;
  return (
    <main className="py-20">
      <div className="container space-y-20">
        <Search search={search} />
        <SearchedBooks />
      </div>
    </main>
  );
};

export default ResultsPage;
