"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "로그아웃이 완료되었네요!" });
  };

  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout}>로그아웃</button>
    </SignOutButton>
  );
}
export default SignOutLink;
