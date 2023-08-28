"use client";
import { useState } from "react";
import React from "react";
import { cn } from "@/lib/utils";
import { ImSpinner8 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
  }

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSignup = async () => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        cache: "default",
      });
      const data = await res.json();

      if (data.status == "success") {
        setIsLoading(false);
        toast.success("User Created Successfully");
        router.push("/views/signin");
      } else {
        setIsLoading(false);
        toast.error("Signup Failed");
      }

      console.log(res);
    } catch (error: any) {
      console.log("Signup Failed", error.message);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter Your Name"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Passwrod
            </Label>
            <Input
              id="password"
              placeholder="Enter Your Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Confirm Passwrod
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm Your Password"
              disabled={isLoading}
              onChange={(e) =>
                setUser({ ...user, passwordConfirm: e.target.value })
              }
            />
          </div>
          <Button disabled={isLoading} onClick={handleSignup}>
            {isLoading && <ImSpinner8 className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <ImSpinner8 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <AiFillGithub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
    </div>
  );
}
