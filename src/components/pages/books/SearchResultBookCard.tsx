import { TBook } from "@/types";
import Image from "next/image";

const SearchResultBookCard = ({ book }: { book: TBook }) => {
  return (
    <div className="flex overflow-hidden rounded-2xl border bg-white shadow-sm duration-300">
      <div className="relative min-h-[400px] w-full basis-[400px] overflow-hidden">
        <Image
          className="rounded-t-2xl object-cover object-center duration-200 hover:scale-105"
          src={book.coverImage}
          alt={book.title}
          fill
        />
      </div>

      <div className="basis-full p-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">{book.title}</h2>
        <p className="mb-4 text-sm text-gray-600">By {book.author.name}</p>
        <p className="mb-4 line-clamp-3 text-gray-700">{book.description}</p>
      </div>
    </div>
  );
};

export default SearchResultBookCard;
