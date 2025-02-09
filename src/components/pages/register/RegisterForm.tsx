"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiBaseUrl } from "@/secrets";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const RegisterForm = () => {
  const { push } = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (data: FormData) =>
      await axios.post(`${apiBaseUrl}/users/register/`, data),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    formData.append("photo", data.photo[0]);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      push("/login");
      toast.success("Registration successful!");
    }

    if (isError) {
      toast.error("Could not register, please check your credentials!");
    }
  }, [reset, isSuccess, isError, push]);

  return (
    <form
      className="mt-5 space-y-4"
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Label>Profile Photo</Label>
        <Input {...register("photo")} type="file" />
      </div>

      <Input
        {...register("name")}
        type="text"
        placeholder="Full Name"
        required
      />
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
          {isPending ? "Registering..." : "Register"}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
