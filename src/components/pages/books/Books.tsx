"use client";

import BookCard from "@/components/pages/books/BookCard";
import { apiBaseUrl } from "@/secrets";
import { TBook } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const Books = () => {
  const searchParams = useSearchParams();
  console.log("🚀 ~ Books ~ searchParams:", searchParams);

  const { data, isLoading } = useQuery({
    queryKey: ["books", searchParams.toString()],
    queryFn: async () => {
      const paramsString = searchParams.toString();
      const url = `${apiBaseUrl}/books/${paramsString ? `?${paramsString}` : ""}`;
      const response = await axios.get(url);
      console.log("🚀 ~ queryFn: ~ response:", response);
      return response.data;
    },
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="grid basis-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {data?.payload?.map((book: TBook) => <BookCard key={book.id} />)}
    </div>
  );
};

export default Books;
