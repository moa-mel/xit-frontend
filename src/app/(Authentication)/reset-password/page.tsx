"use client"
import { useRouter } from "next/navigation"
import "./ResetPassword.css"
import Image from "next/image";
import logo from "@/assets/images/Icon.png"
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { resetPasswordSchema } from "@/utils/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useResetPasswordMutation } from "@/redux/Auth/authService";
import { useForm } from "react-hook-form";

interface ResetPasswordForm {
    password: string;
    confirmPassword: string;
}

const ResetPassword = () => {
    const router = useRouter()

    const [forgotPassword, { isLoading }] = useResetPasswordMutation();
        
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<ResetPasswordForm>({
            resolver: yupResolver(resetPasswordSchema),
        });
    
        const onSubmit = async (data: ResetPasswordForm) => {
            try {
                const response = await forgotPassword(data).unwrap();
                toast.success("Password reset successfully!");
            } catch (error: any) {
                toast.error(error?.data?.message || "Failed to send reset email");
            }
        };

    return (
        <div className="resetSection" >
            <header className="resetHeader">
                <Image
                    src={logo}
                    alt="Logo"
                    width={15}
                    height={15}
                    className="logo"
                />
                <span className="logoText">Xit</span>
            </header>
            <div className="resetTitle">Reset Password</div>
            <form className="resetForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="resetInput">
                    <label>Password</label>
                    <input {...register("password")} placeholder="pass123@" type="password" />
                </div>
                <div className="resetInput">
                    <label>Confirm Password</label>
                    <input {...register("confirmPassword")} placeholder="pass123@" type="password" />
                </div>
                <button type="button" className="resetButton" >
                    Reset Password
                </button>
            </form>
            <div className="divider">
                <hr />
                <span className="dividerText">Or</span>
            </div>
            <p className="loginLink">
                Remember password? <span onClick={() => router.push("/login")}>Log in</span>
            </p>
        </div>
    )
}

export default ResetPassword