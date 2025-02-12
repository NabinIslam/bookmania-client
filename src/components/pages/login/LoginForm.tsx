"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiBaseUrl } from "@/secrets";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FieldValues>();

  const { mutate, isSuccess, isError, isPending, data } = useMutation<
    AxiosResponse,
    unknown,
    FieldValues
  >({
    mutationFn: async (loginData) =>
      await axios.post(`${apiBaseUrl}/users/login/`, loginData),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      const token = data?.data?.payload?.token;

      // Save token to cookies
      Cookies.set("token", token, {
        expires: 1,
        secure: true,
      });

      // Redirect to admin dashboard
      router.push("/books");

      toast.success("Login successful!");
    }

    if (isError) {
      toast.error("Could not login");
    }
  }, [data?.data?.payload?.token, isError, isSuccess, router]);

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
