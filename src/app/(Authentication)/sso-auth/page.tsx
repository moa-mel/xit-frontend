"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface SSOAuthProps {
  searchParams: {
    token?: string;
    refresh?: string;
    isNewUser?: string;
  };
}

const SSOAuth = ({ searchParams }: SSOAuthProps) => {
  const router = useRouter();

  useEffect(() => {
    const { token, refresh, isNewUser } = searchParams;

    if (!token) {
      toast.error("Authentication failed");
      router.push("/login");
      return;
    }

    localStorage.setItem("accessToken", token);
    if (refresh) {
      localStorage.setItem("refreshToken", refresh);
    }

    toast.success("Login successful");

    if (isNewUser === "true") {
      router.push("/onboarding");
    } else {
      router.push("/dashboard");
    }
  }, [searchParams, router]);

  return (
    <div className="auth-loading">
      <p>Authenticating with Google...</p>
    </div>
  );
};

export default SSOAuth;