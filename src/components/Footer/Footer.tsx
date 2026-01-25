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
                    
                    <div className="footerLine"></div>
                    <p className="footerDownSection">© 2025 Xit. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;