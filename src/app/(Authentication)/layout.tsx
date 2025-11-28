import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import { ReactNode } from "react";

export default function AuthenticationLayout ({ children }: { children: ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
};
