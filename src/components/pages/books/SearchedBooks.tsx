"use client";

import { apiBaseUrl } from "@/secrets";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import BookCard from "./BookCard";
import { TBook } from "@/types";

const SearchedBooks = () => {
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

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section>
      {data?.payload?.map((book: TBook) => <BookCard key={book.id} />)}
    </section>
  );
};

export default SearchedBooks;
