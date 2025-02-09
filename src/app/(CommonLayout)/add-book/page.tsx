import AddBookForm from "@/components/pages/add-book/AddBookForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookMania | Add Book",
};

const AddBookPage = () => {
  return (
    <main className="py-20">
      <div className="container space-y-10">
        <h1 className="text-3xl font-bold">
          Add your favorite book to the community
        </h1>

        {/* Add book form */}

        <AddBookForm />
      </div>
    </main>
  );
};

export default AddBookPage;
