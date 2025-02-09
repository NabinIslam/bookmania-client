"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiBaseUrl } from "@/secrets";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { push } = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const { data, mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: async (data: FieldValues) =>
      await axios.post(`${apiBaseUrl}/users/login/`, data),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", data.data.payload.token);
      reset();
      push("/books");
      toast.success("Login successful!");
    }

    if (isError) {
      toast.error("Could not login, please check your credentials!");
    }

    if (error) {
      console.error(error);
    }
  }, [reset, isSuccess, isError, push, data?.data.payload.token, error]);

  return (
    <form
      className="mt-5 space-y-4"
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("email")}
        type="email"
        placeholder="Email address"
        required
      />
      <Input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <div className="flex items-center justify-center lg:justify-start">
        <Button disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
