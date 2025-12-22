"use client"
import "./ForgotPassword.css"
import Image from "next/image";
import logo from "@/assests/images/Icon.png"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import { forgotPasswordSchema } from "@/utils/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "@/redux/Auth/authService";

interface ForgotPasswordForm {
    email: string;
}

const ForgotPassword = () => {
    const router = useRouter();
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordForm>({
        resolver: yupResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data: ForgotPasswordForm) => {
        try {
            const response = await forgotPassword(data).unwrap();
            toast.success("Password reset email sent successfully!");
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to send reset email");
        }
    };

    return (
        <div className="forgotSection">
            <header className="forgotHeader">
                <Image
                    src={logo}
                    alt="Logo"
                    width={15}
                    height={15}
                    className="logo"
                />
                <span className="logoText">Xit</span>
            </header>
            <div className="forgotTitle">Forgot Password</div>
            <form className="forgotForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="forgotInput">
                    <label>Email</label>
                    <input
                        {...register("email")}
                        placeholder="test@example.com"
                        type="email"
                    />
                    {errors.email && (
                        <span className="error">{errors.email.message}</span>
                    )}
                </div>
                <button
                    type="submit"
                    className="forgotButton"
                    disabled={isLoading}
                >
                    {isLoading ? "Sending..." : "Send Email"}
                </button>
            </form>
            <div className="divider">
                <hr />
                <span className="dividerText">Or</span>
            </div>
            <p className="loginLink">
                Remember password?{" "}
                <span onClick={() => router.push("/login")}>Log in</span>
            </p>
        </div>
    );
};

export default ForgotPassword;