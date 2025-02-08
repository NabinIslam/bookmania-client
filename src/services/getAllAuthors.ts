import { apiBaseUrl } from "@/secrets";

const getAllAuthors = async () => {
  const data = await fetch(`${apiBaseUrl}/authors`, {
    cache: "force-cache",
  });

  const authors = await data.json();

  return authors;
};

export default getAllAuthors;
