import { apiBaseUrl } from "@/secrets";

const getAllGenres = async () => {
  const res = await fetch(`${apiBaseUrl}/genres/`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  const genres = await res.json();

  return genres;
};

export default getAllGenres;
