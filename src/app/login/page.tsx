"use client"
import "./Login.css"
import Image from "next/image";
import login from "@/assests/images/signup.png"
import logo from "@/assests/images/Vector.png"
import google from "@/assests/images/google.png"
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter()
    return (
        <div className="loginSection"
        >
            <Image
                src={login}
                alt="login"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="loginImage"
            />
            <div className="loginContainer">
                <header className="loginHeader">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={15}
                        height={15}
                        className="logo"
                    />
                    <span className="logoText">Xit</span>
                </header>
                <div className="loginTitle">Login</div>
                <div className="loginSubTitle">Welcome back 👋 </div>
                <div className="loginForm">
                    <div className="loginInput">
                        <label>Email</label>
                        <input placeholder="test@example.com" type="email" />
                    </div>
                    <div className="loginInput">
                        <label>Password</label>
                        <input placeholder="pass123@" type="password" />
                        <span onClick={() => router.push("/forgot-password")} className="forgotPassword">
                            Forgot password?
                        </span>
                    </div>
                    <button type="button" className="loginButton" >
                        Login
                    </button>
                </div>
                <div className="divider">
                    <hr />
                    <span className="dividerText">OR</span>
                </div>
                <div className="loginSocial">
                    <button
                        className="socialButton"
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
            </div>
        </div>
    )
}

export default Login