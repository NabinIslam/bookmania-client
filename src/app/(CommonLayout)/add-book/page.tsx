import AddBookForm from "@/components/pages/add-book/AddBookForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BookMania | Add Book",
};

const AddBookPage = () => {
  return (
    <main className="py-20">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <Image
            className="h-auto w-full"
            src="/add-book.svg"
            alt="Borno Login"
            height={400}
            width={400}
          />
        </div>
        <div className="space-y-10">
          <h1 className="text-3xl font-bold">
            Add your favorite book to the community
          </h1>

          {/* Add book form */}

          <AddBookForm />
        </div>
      </div>
    </main>
  );
};

export default AddBookPage;
