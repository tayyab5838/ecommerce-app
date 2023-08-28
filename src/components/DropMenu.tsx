import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DropMenu = () => {
  const router = useRouter();
  const [userAuthorize, setUserAuthorize] = useState(false);

  const hasToken = async () => {
    try {
      const res = await fetch("/api/auth/validation");
      if (res) {
        const data = await res.json();
        const { isAuthenticated } = data;

        setUserAuthorize(isAuthenticated);
      } else {
        console.log("Empty response from validation");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const signout = async () => {
    const res = await fetch("/api/auth/logout");
    const data = await res.json();
    if (data.status === "success") {
      toast.success("Logout Successfull");
      router.push("/views/signin");
    }
  };

  useEffect(() => {
    hasToken();
  }, []);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="border-none select-none">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          {userAuthorize ? (
            <DropdownMenuItem>
              <button onClick={signout}>SignOut</button>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem>
              <Link href={"/views/signin"}>SignIn</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropMenu;
