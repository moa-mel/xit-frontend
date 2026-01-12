"use client"
import { useRouter, useParams } from "next/navigation"
import "./ResetPassword.css"
import Image from "next/image";
import logo from "@/assets/images/Icon.png"
import { toast } from "react-toastify";
import { useEffect } from "react";
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
    const params = useParams();
    const identifier = params.identifier as string;
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    // Check if identifier exists on mount
    useEffect(() => {
        if (!identifier) {
            toast.error("Invalid reset link. Please request a new one.");
            router.push("/forgot-password");
        }
    }, [identifier, router]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordForm>({
        resolver: yupResolver(resetPasswordSchema),
    });

    const onSubmit = async (data: ResetPasswordForm) => {
        if (!identifier) {
            toast.error("Invalid reset link. Please request a new one.");
            return;
        }

        try {
            const response = await resetPassword({
                body: {
                    password: data.password,
                    confirmPassword: data.confirmPassword
                },
                identifier
            }).unwrap();

            toast.success("Password reset successfully!");
            router.push("/login");
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to reset password");
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
                    {errors.password && (
                        <span className="error">{errors.password.message}</span>
                    )}
                </div>
                <div className="resetInput">
                    <label>Confirm Password</label>
                    <input {...register("confirmPassword")} placeholder="pass123@" type="password" />
                    {errors.confirmPassword && (
                        <span className="error">{errors.confirmPassword.message}</span>
                    )}
                </div>
                <button type="submit" className="resetButton" >
                    {isLoading ? "Resetting..." : "Reset Password"}
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