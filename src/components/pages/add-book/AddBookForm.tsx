"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiBaseUrl } from "@/secrets";
import { TAuthor, TGenre } from "@/types";
import { useEffect } from "react";
import { toast } from "sonner";

const AddBookForm = () => {
  const { data: genres, isLoading: isGenresLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const response = await axios.get(`${apiBaseUrl}/genres/`);
      return response.data;
    },
  });

  const { data: authors, isLoading: isAuthorsLoading } = useQuery({
    queryKey: ["authors"],
    queryFn: async () => {
      const response = await axios.get(`${apiBaseUrl}/authors/`);
      return response.data;
    },
  });
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: async (data: FormData) =>
      await axios.post(`${apiBaseUrl}/books/`, data),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("🚀 ~ AddBookForm ~ data:", data);
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("coverImage", data.coverImage[0]);
    formData.append("genreId", data.genreId);
    formData.append("authorId", data.authorId);

    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success("Book added successfully!");
    }

    if (isError) {
      toast.error("Could not add the book, please try again!");
    }

    if (error) {
      console.error(error);
    }
  }, [isSuccess, reset, isError, error]);

  if (isAuthorsLoading || isGenresLoading) return <h1>Loading...</h1>;

  return (
    <form
      className="space-y-5 text-sm lg:w-1/2"
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Label className="mb-1 font-medium">Book name</Label>
        <Input {...register("title")} type="text" required />
      </div>

      <div>
        <Label className="mb-1 font-medium">Description</Label>

        <Textarea
          {...register("description")}
          placeholder="Describe shortly about the book"
          rows={5}
          required
        />
      </div>

      <div>
        <Label className="mb-1 font-medium">Book cover photo</Label>
        <Input {...register("coverImage")} type="file" required />
      </div>

      <div>
        <Label className="mb-1 font-medium">Select genre</Label>
        <select
          className="w-full rounded-md border px-2 py-2 shadow-sm"
          {...register("genreId")}
        >
          {genres?.payload?.map((genre: TGenre) => (
            <option value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label className="mb-1 font-medium">Select author</Label>
        <select
          className="w-full rounded-md border px-2 py-2 shadow-sm"
          {...register("authorId")}
        >
          {authors?.payload?.map((author: TAuthor) => (
            <option value={author.id} key={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add"}
        </Button>
      </div>
    </form>
  );
};

export default AddBookForm;
