"use client"
import { useRouter } from "next/navigation"
import "./ResetPassword.css"
import Image from "next/image";
import logo from "@/assests/images/Icon.png"

const ResetPassword = () => {
    const router = useRouter()
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
            <div className="resetForm">
                <div className="resetInput">
                    <label>Password</label>
                    <input placeholder="pass123@" type="password" />
                </div>
                <div className="resetInput">
                    <label>Confirm Password</label>
                    <input placeholder="pass123@" type="password" />
                </div>
                <button type="button" className="resetButton" >
                    Reset Password
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

export default ResetPassword