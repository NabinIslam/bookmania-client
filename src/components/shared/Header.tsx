"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/providers/UserContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user } = useUser();
  const { push } = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      push("/books");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white py-3 shadow-sm">
      <nav className="container flex items-center justify-between">
        <Link
          className="rounded-xl px-2 py-1 text-2xl font-extrabold hover:bg-accent"
          href="/"
        >
          BookMania
        </Link>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="border">
                <AvatarImage src={user.photo} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link className="cursor-pointer" href="/add-book">
                <DropdownMenuItem>Add book</DropdownMenuItem>
              </Link>

              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
