"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "로그아웃이 완료되었네요!" });
  };

  return (
    <SignOutButton redirectUrl="/">
      <Button
        onClick={handleLogout}
        className="text-xs"
        variant="outline"
        size="sm"
      >
        로그아웃
      </Button>
    </SignOutButton>
  );
}
export default SignOutLink;
