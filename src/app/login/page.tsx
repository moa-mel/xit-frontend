"use client";

import "./Login.css";
import Image from "next/image";
import loginBg from "@/assets/images/signup.png";
import logo from "@/assets/images/Vector.png";
import google from "@/assets/images/google.png";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/utils/helpers/validation";
import { ILoginPayload, useLoginMutation } from "@/redux/Auth/authService";

interface LoginProps {
    searchParams: {
        redirectUrl?: string;
    };
}

const Login = ({ searchParams }: LoginProps) => {
    const router = useRouter();
    const [loginUser, { isLoading }] = useLoginMutation();
    const redirectUrl = searchParams.redirectUrl;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginPayload>({
        resolver: yupResolver(loginSchema),
    });

    const handleLogin = async (data: ILoginPayload) => {
        try {
            await loginUser(data).unwrap();
            toast.success("Login successful!");
            router.push("/home");
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong");
        }
    };

    const handleAuth = async (platform: string) => {
        const authPayload = {
            authType: "login",
            platform: platform,
            redirectUrl: redirectUrl
        };

        localStorage.setItem("ssoDetails", JSON.stringify(authPayload));

        if (platform === "google") {
            window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/url`;
        }
    };

    return (
        <div className="loginSection">
            <Image
                src={loginBg}
                alt="login background"
                fill
                priority
                className="loginImage"
                style={{ objectFit: "cover" }}
            />

            <div className="loginContainer">
                <header className="loginHeader">
                    <Image src={logo} alt="Logo" width={15} height={15} />
                    <span className="logoText">Xit</span>
                </header>

                <div className="loginTitle">Login</div>
                <div className="loginSubTitle">Welcome back 👋</div>

                <form className="loginForm" onSubmit={handleSubmit(handleLogin)}>
                    <div className="loginInput">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="test@example.com"
                            {...register("email")}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>

                    <div className="loginInput">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="pass123@"
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="error">{errors.password.message}</p>
                        )}

                        <span
                            onClick={() => router.push("/forgot-password")}
                            className="forgotPassword"
                        >
                            Forgot password?
                        </span>
                    </div>

                    <button type="submit" className="loginButton" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="divider">
                    <hr />
                    <span className="dividerText">OR</span>
                </div>

                <div className="loginSocial">
                    <button className="socialButton" type="button" onClick={() => handleAuth("google")}>
                        <Image src={google} alt="Google" width={20} height={20} />
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;