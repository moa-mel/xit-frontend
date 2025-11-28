
"use client"
import "./ForgotPassword.css"
import Image from "next/image";
import logo from "@/assests/images/Icon.png"
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
    const router = useRouter()
    return (
        <div className="forgotSection" >
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
            <div className="forgotForm">
                <div className="forgotInput">
                    <label>Email</label>
                    <input placeholder="test@example.com" type="email" />
                </div>
                <button type="button" className="forgotButton" >
                    Send Email
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

export default ForgotPassword