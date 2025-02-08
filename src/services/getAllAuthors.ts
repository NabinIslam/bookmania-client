import { apiBaseUrl } from "@/secrets";

const getAllAuthors = async () => {
  const res = await fetch(`${apiBaseUrl}/authors/`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch authors");
  }

  const authors = await res.json();

  return authors;
};

export default getAllAuthors;
