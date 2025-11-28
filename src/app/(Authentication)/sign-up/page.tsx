"use client"
import "./SignUp.css"
import Image from "next/image";
import signup from "@/assests/images/signup.png"
import logo from "@/assests/images/Icon.png"
import google from "@/assests/images/google.png"
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter()
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
                <div className="registerForm">
                    <div className="registerInput">
                        <label>First Name</label>
                        <input placeholder="Text" type="text" />
                    </div>
                    <div className="registerInput">
                        <label>Last Name</label>
                        <input placeholder="Test" type="text" />
                    </div>
                    <div className="registerInput">
                        <label>Email</label>
                        <input placeholder="test@example.com" type="email" />
                    </div>
                    <div className="registerInput">
                        <label>Password</label>
                        <input placeholder="pass123@" type="password" />
                    </div>
                    <button type="button" className="registerButton" >
                        Sign Up
                    </button>
                </div>
                <div className="divider">
                    <hr />
                    <span className="dividerText">Or</span>
                </div>
                <div className="registerSocial">
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
                 <p className="signUpLink">
                Already have an account? <span onClick={() => router.push("/login")}>Sign in</span>
              </p>
            </div>
    )
}

export default SignUp