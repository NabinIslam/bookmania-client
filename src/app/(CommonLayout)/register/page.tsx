import RegisterForm from "@/components/pages/register/RegisterForm";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BookMania | Register",
};

const RegisterPage = () => {
  return (
    <main className="">
      <div className="container flex min-h-[93vh] flex-col items-center justify-center gap-[100px] py-[100px] lg:flex-row">
        <div className="basis-full lg:basis-1/2">
          <Image
            className="h-auto w-full"
            src="/login.svg"
            alt="Borno Login"
            height={400}
            width={400}
          />
        </div>
        <div className="basis-full lg:basis-1/2">
          <div className="max-w-[450px]">
            <h1 className="text-center text-3xl font-bold lg:text-left">
              Welcome to BookMania
            </h1>
            <p className="mt-1 text-center text-sm lg:text-left">
              Please register to use the platform
            </p>
            <RegisterForm />
            <p className="mt-2 text-center text-sm lg:text-left">
              Already have an account?{" "}
              <Link className="font-bold hover:underline" href="/login">
                Login
              </Link>
            </p>
            <div className="mt-5 flex flex-col items-center gap-5 lg:flex-row">
              <Button
                className="flex items-center justify-center"
                variant="outline"
              >
                <Image
                  src="/google-icon.svg"
                  alt="Google Icon"
                  width={20}
                  height={20}
                />
                Continue with Google
              </Button>
              <Button
                className="flex items-center justify-center"
                variant="outline"
              >
                <Image
                  src="/facebook-icon.svg.webp"
                  alt="Facebook Icon"
                  width={20}
                  height={20}
                />
                Continue with Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
