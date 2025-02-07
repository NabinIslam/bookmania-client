import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="py-3">
      <nav className="container flex items-center justify-between">
        <Link
          className="hover:bg-accent rounded-xl px-2 py-1 text-2xl font-extrabold"
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
