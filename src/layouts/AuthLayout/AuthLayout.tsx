import { ReactNode } from "react";
import "./AuthLayout.css";
import Image from "next/image";
import signup from "@/assests/images/signup.png"
import login from "@/assests/images/Art.png"
import mobileLogin from "@/assests/images/Login Art.png"


const AuthLayout = ({ children }: { children: ReactNode }) => {
    return(
        <div className="authContainer">
            <div className="authLeft">
                <header>

                </header>
                <section>
                    <div>
                        <Image
                        src={signup}
                        alt="signup"
                        width={100}
                        height={100}
                        />
                        <div>
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AuthLayout;