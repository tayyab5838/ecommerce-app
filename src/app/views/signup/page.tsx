import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/Signup";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <Header />
      <div className="container my-10 flex items-center justify-center ">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Already have an account{" "}
              <span>
                <Link
                  href="/views/signin"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "bg-[#e5e7eb] text-black"
                  )}
                >
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
