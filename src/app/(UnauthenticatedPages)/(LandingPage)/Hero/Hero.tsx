"use client";
import Image from "next/image";
import heroImage from "@/assets/images/Illustration.png"
import "./Hero.css";
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/sign-up")
    }
    return (
        <div className="heroSection">
            <div className="heroContainer">
                <div className="heroLeftSection">
                    <h1 className="heroTitle">Navigating the <br /> digital landscape <br /> for success</h1>
                    <p className="heroDescription">Our digital marketing agency helps businesses <br /> grow and succeed online through a range of <br /> services including SEO, PPC, social media marketing, <br /> and content creation.</p>
                    <button className="heroButton" onClick={handleGetStarted}>Get Started</button>
                </div>
                <div className="heroRightSection">
                    <Image
                        src={heroImage}
                        alt="Hero Image"
                        className="heroImage"
                        width={450}
                        height={450}
                        priority={true}
                    />
                </div>
            </div>

        </div>
    )
}

export default Hero;