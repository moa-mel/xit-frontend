"use client"
import "./VerifyEmail.css"
import Image from "next/image";
import logo from "@/assets/images/Icon.png"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { verifyEmailSchema } from "@/utils/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";

const VerifyEmail = () => {
    const router = useRouter()
    const [isOtpActive, setIsOtpActive] = useState(false);
    const resolver = yupResolver(verifyEmailSchema(isOtpActive));

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
            <div className="verifyTitle">Verify Email</div>
            <div className="verifyForm">
                <div className="verifyInput">
                    <label>OTP Code</label>
                    <input placeholder="pass123@" type="number" />
                </div>
                <button type="button" className="verifyButton" >
                    Verify Email
                </button>
            </div>
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