"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Search = () => {
  const { handleSubmit, register, reset } = useForm();
  const { push } = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    reset();
    push(`/results?search=${data.search}`);
  };

  return (
    <form
      className="mx-auto flex max-w-lg items-center justify-center gap-2"
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("search")}
        type="text"
        placeholder="Search book by name"
      />
      <Button type="submit">
        <IoMdSearch />
      </Button>
    </form>
  );
};

export default Search;
