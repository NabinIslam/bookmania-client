import getAllAuthors from "@/services/getAllAuthors";
import getAllGenres from "@/services/getAllGenres";
import { TAuthor, TGenre } from "@/types";
import Link from "next/link";

const Sidebar = async () => {
  const genres = await getAllGenres();
  const authors = await getAllAuthors();

  return (
    <aside className="max-w-[350px] space-y-10">
      <div>
        <h4 className="mb-3 text-xl font-semibold">Genres</h4>
        <div className="flex flex-wrap gap-2">
          {genres.payload.map((genre: TGenre) => (
            <Link
              href={`/books?genre=${genre.slug}`}
              className="inline-block cursor-pointer rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-white"
              key={genre.id}
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold">Author</h4>
        <div className="flex flex-wrap gap-2">
          {authors.payload.map((author: TAuthor) => (
            <Link
              href={`/books?author=${author.name}`}
              className="inline-block cursor-pointer rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-white"
              key={author.id}
            >
              {author.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
