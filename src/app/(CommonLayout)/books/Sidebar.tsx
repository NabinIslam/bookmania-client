import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="space-y-10">
      <div>
        <h4 className="mb-3 text-xl font-semibold">Genres</h4>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/books?genre=comedy"
            className="inline-block cursor-pointer rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-white"
          >
            Comedy
          </Link>
          <Link
            href="/books?genre=comedy"
            className="inline-block cursor-pointer rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-white"
          >
            Thriller
          </Link>
          <Link
            href="/books?genre=comedy"
            className="inline-block cursor-pointer rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-white"
          >
            Sci-fi
          </Link>
          <Link
            href="/books?genre=comedy"
            className="inline-block cursor-pointer rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-white"
          >
            History
          </Link>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xl font-semibold">Author</h4>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/books?genre=comedy"
            className="inline-block cursor-pointer rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-white"
          >
            Comedy
          </Link>
          <Link
            href="/books?genre=comedy"
            className="inline-block cursor-pointer rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-white"
          >
            Thriller
          </Link>
          <Link
            href="/books?genre=comedy"
            className="inline-block cursor-pointer rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-white"
          >
            Sci-fi
          </Link>
          <Link
            href="/books?genre=comedy"
            className="inline-block cursor-pointer rounded-full border border-primary px-3 py-1 text-sm text-primary hover:bg-primary hover:text-white"
          >
            History
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
