"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

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
        <Button type="submit">Register</Button>
      </div>
    </form>
  );
};

export default RegisterForm;
