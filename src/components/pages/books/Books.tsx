"use client";

import BookCard from "@/components/pages/books/BookCard";
import BooksSkeletons from "@/components/skeletons/BooksSkeletons";
import { apiBaseUrl } from "@/secrets";
import { TBook } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const Books = () => {
  const searchParams = useSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: ["books", searchParams.toString()],
    queryFn: async () => {
      const paramsString = searchParams.toString();
      const url = `${apiBaseUrl}/books/${paramsString ? `?${paramsString}` : ""}`;
      const response = await axios.get(url);
      return response.data;
    },
  });

  console.log(data?.payload);

  if (isLoading) return <BooksSkeletons />;

  return (
    <div className="grid basis-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {data?.payload.length > 0 ? (
        data?.payload?.map((book: TBook) => (
          <BookCard key={book.id} book={book} />
        ))
      ) : (
        <p>No book found :(</p>
      )}
    </div>
  );
};

export default Books;
