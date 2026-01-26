"use client";
import "./Footer.css"
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/Group 33596.png"

const Footer = () => {
    return (
        <footer>
            <div className="footerSection">
                <div className="footerContainer">
                    <div className="footerUp">
                        <div className="footerItem">
                            <Image
                                src={logo}
                                alt="logo"
                                width={20}
                                height={20}
                                priority={true}
                            />
                            <p>
                                A simple platform for live streaming and podcasts, built to let creators share <br />
                                their voice and listeners engage effortlessly.
                            </p>
                        </div>
                        <div className="footerItem">
                            <p>Contact Us</p>
                            <p>hello@xit.com</p>
                            <p>+234 91 234 ****</p>
                        </div>
                        <div className="footerItem">
                            <p>Get The Freshest News From Us</p>
                            <input
                            type="text"
                            placeholder="Enter your Email"
                            />
                            <button>Sign up</button>
                        </div>
                    </div>

                    <div className="footerLine"></div>
                    <div className="footerDown">
                        <p className="footerDownSection"> Terms & Conditions     |     Privacy Policy     |     Accessibility     |     Legal </p>
                        <p className="footerDownSection">© 2026 Xit. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;