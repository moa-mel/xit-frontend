import "./SignUp.css"
import Image from "next/image";
import signup from "@/assests/images/signup.png"
import logo from "@/assests/images/Vector.png"
import google from "@/assests/images/google.png"

const SignUp = () => {
    return (
        <div className="registerSection"
        >
            <Image
                src={signup}
                alt="signup"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="registerImage"
            />
            <div className="registerContainer">
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
                <div className="registerTitle">Login</div>
                <div className="registerSubTitle">Welcome back! </div>
                <div className="registerForm">
                    {/* <div className="registerInput">
                        <label>First Name</label>
                        <input placeholder="Text" type="text" />
                    </div>
                    <div className="registerInput">
                        <label>Last Name</label>
                        <input placeholder="Test" type="text" />
                    </div> */}
                    <div className="registerInput">
                        <label>Email</label>
                        <input placeholder="test@example.com" type="email" />
                    </div>
                    <div className="registerInput">
                        <label>Password</label>
                        <input placeholder="pass123@" type="password" />
                    </div>
                    <button type="button" className="registerButton" >
                        Login
                    </button>
                </div>
                <div className="divider">
                    <hr />
                    <span className="dividerText">OR</span>
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
            </div>
        </div>
    )
}

export default SignUp