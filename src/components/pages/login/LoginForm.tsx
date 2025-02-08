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
import { LiteralUnion, signIn } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";

// Define an interface for the login data

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (data) => await signIn(data),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success("Logged in successfully!");
    }

    if (isError) {
      toast.error("Could not login, please check your credentials!");
    }
  }, [reset, isSuccess, isError]);

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
