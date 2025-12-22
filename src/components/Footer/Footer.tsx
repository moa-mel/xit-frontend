"use client";
import "./Footer.css"
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/Vector.png"
import linkedIn from "@/assets/images/Social icon(1).png"
import facebook from "@/assets/images/Social icon(2).png"
import x from "@/assets/images/Social icon(3).png"

const Footer = () => {
    return (
        <footer>
            <div className="footerSection">
                <div className="footerContainer">
                    <div className="footerUpSection">
                        <div className="footerHeader">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={15}
                                height={15}
                            />
                            <span className="footerText">Xit</span>
                        </div>
                        <div className="footerSocial">
                            <Image
                                src={linkedIn}
                                alt="linkedIn"
                                width={15}
                                height={15}
                            />
                            <Image
                                src={facebook}
                                alt="facebook"
                                width={15}
                                height={15}
                            />
                            <Image
                                src={x}
                                alt="x"
                                width={15}
                                height={15}
                            />
                        </div>
                    </div>
                    <div className="footerLine"></div>
                    <p className="footerDownSection">© 2025 Xit. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;