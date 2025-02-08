import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white py-3 shadow-sm">
      <nav className="container flex items-center justify-between">
        <Link
          className="rounded-xl px-2 py-1 text-2xl font-extrabold hover:bg-accent"
          href="/"
        >
          BookMania
        </Link>

        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
