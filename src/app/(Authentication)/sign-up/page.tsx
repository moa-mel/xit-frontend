"use client"
import "./SignUp.css"
import Image from "next/image";
import logo from "@/assests/images/Icon.png"
import google from "@/assests/images/google.png"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { signUpSchema } from "@/utils/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import { endpoints, useSignUpMutation } from "@/redux/Auth/authService";
import { IRegisterPayload } from "@/redux/Auth/authService";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const router = useRouter()
    const [signUp, { isLoading }] = useSignUpMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterPayload>({
        resolver: yupResolver(signUpSchema),
    });


    const handleSignUp = async (data: IRegisterPayload) => {
        try {
            await signUp(data).unwrap();

            toast.success("Registration successful!");
            router.push("/verify-email");
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong");
        }
    }

    const handleAuth = async (platform: string) => {
        const authPayload = {
            authType: "login",
            platform: platform
        };

        localStorage.setItem("ssoDetails", JSON.stringify(authPayload));

        if (platform === "google") {
            window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/url`;
        } 
    };

    return (
        <div className="registerSection" >
            <header className="registerHeader">
                <Image
                    src={logo}
                    alt="Logo"
                    width={15}
                    height={15}
                    className="logo"
                />
                <span className="logoText">Xit</span>
            </header>
            <div className="registerTitle">Sign Up</div>
            <div className="registerSubTitle">Start Xitting by creating an account! </div>
            <form className="registerForm" onSubmit={handleSubmit(handleSignUp)}>
                <div className="registerInput">
                    <label>First Name</label>
                    <input placeholder="Text"
                        {...register("firstName")}
                        type="text" />
                </div>
                <div className="registerInput">
                    <label>Last Name</label>
                    <input placeholder="Test"
                        {...register("lastName")}
                        type="text" />
                </div>
                <div className="registerInput">
                    <label>Email</label>
                    <input placeholder="test@example.com"
                        {...register("email")}
                        type="email" />
                </div>
                <div className="registerInput">
                    <label>Password</label>
                    <input placeholder="pass123@"
                        {...register("password")}
                        type="password" />
                </div>
                <button type="submit" className="registerButton" disabled={isLoading} >
                    {isLoading ? "Signing up..." : "Sign Up"}
                </button>
            </form>
            <div className="divider">
                <hr />
                <span className="dividerText">Or</span>
            </div>
            <div className="registerSocial">
                <button
                    className="socialButton"
                    onClick={() => handleAuth("google")}
                >
                    <Image
                        src={google}
                        alt="Google"
                        width={20}
                        height={20}
                    />
                    <span>Sign In with Google</span>
                </button>

            </div>
            <p className="signUpLink">
                Already have an account? <span onClick={() => router.push("/login")}>Sign in</span>
            </p>
        </div>
    )
}

export default SignUp