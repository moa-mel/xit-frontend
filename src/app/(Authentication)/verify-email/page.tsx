"use client"
import "./VerifyEmail.css"
import Image from "next/image";
import logo from "@/assets/images/Icon.png"
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { verifyEmailSchema } from "@/utils/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useVerifyEmailMutation } from "@/redux/Auth/authService";
import { useForm } from "react-hook-form";

const VerifyEmail = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const [verifyEmail] = useVerifyEmailMutation();

    const type = searchParams.get("type"); // signup | reset
    const identifier = searchParams.get("identifier");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(verifyEmailSchema),
    });


    const handleVerify = async (data: any) => { 
        if (!identifier || !type) {
            toast.error("Missing verification details. Please try again.");
            return;
        }

        try {
            await verifyEmail({
                otp: data.otp,
                identifier,
                type: type as "signup" | "reset", 
            }).unwrap();

            toast.success("Verification successful");

            if (type === "signup") {
                router.push("/login");
            } else if (type === "reset") {
                router.push(`/reset-password?identifier=${identifier}`);
            }
        } catch (err: any) {
            toast.error(err?.data?.message || "Verification failed");
        }
    };

    return (
        <div className="verifySection" >
            <header className="verifyHeader">
                <Image
                    src={logo}
                    alt="Logo"
                    width={15}
                    height={15}
                    className="logo"
                />
                <span className="logoText">Xit</span>
            </header>
            <div className="verifyTitle">
                {type === "reset" ? "Verify Email to Reset Password" : "Verify Email"}
            </div>
            <form className="verifyForm" onSubmit={handleSubmit(handleVerify)}>
                <div className="verifyInput">
                    <label>OTP Code</label>
                    <input
                        type="text"
                        maxLength={6}
                        {...register("otp")}
                    />
                    {errors.otp && <span className="error">{errors.otp.message}</span>}
                </div>
                <button type="submit" className="verifyButton" >
                    {type === "reset" ? "Verify & Continue" : "Verify Email"}
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

export default VerifyEmail