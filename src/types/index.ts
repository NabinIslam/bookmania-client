export type TGenre = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export type TAuthor = {
  id: string;
  name: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
};

export type TBook = {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  authorId: string;
  genreId: string;
  createdAt: string;
  updatedAt: string;
  author: TAuthor;
  genre: TGenre;
};


