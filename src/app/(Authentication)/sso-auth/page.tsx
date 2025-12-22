"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const SSOAuth = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const refresh = searchParams.get("refresh");
    const isNewUser = searchParams.get("isNewUser");

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
