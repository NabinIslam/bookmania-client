import { apiBaseUrl } from "@/secrets";

const getAllGenres = async () => {
  const data = await fetch(`${apiBaseUrl}/genres`, {
    cache: "force-cache",
  });

  const genres = await data.json();

  return genres;
};

export default getAllGenres;
