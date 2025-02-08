import Hero from "@/components/pages/homepage/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookMania",
};

const HomePage = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default HomePage;
