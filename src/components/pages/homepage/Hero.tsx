import Link from "next/link";
import { Button } from "../../ui/button";

const Hero = () => {
  return (
    <section className="">
      <div className="container flex min-h-[90vh] flex-col items-center justify-center gap-5">
        <h3 className="text-center text-2xl">Welcome to BookMania</h3>
        <h1 className="text-center text-5xl font-extrabold">
          Where books find <br /> their readers
        </h1>

        <p className="text-center">
          Join a thriving community of book lovers, explore exclusive books
        </p>
        <Link href="/books">
          <Button>Explore Books</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
