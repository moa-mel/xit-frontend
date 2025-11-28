import { ReactNode } from "react";
import "./AuthLayout.css";
import Image from "next/image";
import login from "@/assests/images/Art.png"

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="authContainer">
            <div className="authSection">
            <div className="contentDiv">{children}</div>
            <div className="authRight">
                <section className="imageContainer">
                    <Image
                        src={login}
                        alt="Classical floral arrangement"
                        fill
                        priority
                        className="loginImage"
                    />
                </section>
            </div>
            </div>
        </div>
    )
}

export default AuthLayout;