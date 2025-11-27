import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import { ReactNode } from "react";

const AuthenticationLayout = ({ children }: { children: ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default AuthenticationLayout;