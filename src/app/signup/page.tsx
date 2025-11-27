import "./SignUp.css"
import Image from "next/image";
import signup from "@/assests/images/signup.png"
import logo from "@/assests/images/Vector.png"

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
                <span className="registerTitle">Sign Up</span>
                <span className="registerSubTitle">Create an account to start using Xit</span>
                
            </div>
        </div>
    )
}

export default SignUp