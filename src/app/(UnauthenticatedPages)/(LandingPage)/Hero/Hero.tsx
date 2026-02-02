"use client";
import Image from "next/image";
import Logo from "@/assets/images/Frame.png"
import hero from "@/assets/images/Group 33600.png"
import arrow from "@/assets/images/Frame 2121453332.png"
import group from "@/assets/images/Group 109.png"
import vector from "@/assets/images/Vector 7759.png"
import "./Hero.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import hamBurger from "@/assets/images/Group 33576.png"

const Hero = () => {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/sign-up")
    }
    return (
        <div className="heroWrapper">
        <div className="heroSection">
            <div className="heroContainer">
                <div className="heroHeader">
                    <div className="heroHeaderLeft">
                        <Image
                            src={Logo}
                            alt="logo icon"
                            width={30}
                            height={30}
                            priority={true}
                        />
                        <h1>Xit</h1>
                    </div>
                    <div className="heroHeaderMain">
                        <p>Home</p>
                        <p>About</p>
                        <p>Podcast</p>
                        <p>Livestream</p>
                    </div>
                    <div className="heroHeaderRight">
                        <p>Sign In</p>
                        <p>Home</p>
                    </div>
                </div>

                <div className="heroWrap">
                    <div className="hwLeft">
                        <div className="heroTitle">
                            <h1>Conversations,<br />Your Way</h1>
                            <Image
                                src={vector}
                                alt="vector"
                                className="underlineVector"
                                priority={true} />
                        </div>
                        <p className="heroDescription">A clean, simple platform for live sessions and podcasts.<br />
                            Host conversations, share ideas, and engage with your<br />
                            audience.</p>
                        <button className="getStartedButton" onClick={handleGetStarted}>
                            Get Started
                            <Image
                                src={arrow}
                                alt="arrow icon"
                                width={40}
                                height={40}
                                priority={true}
                            />
                        </button>
                    </div>
                    <div className="hwRight">
                         <Image
                            src={hero}
                            alt="hero"
                            className="heroImage"
                            priority={true} />
                    </div>
                </div>

                <div className="heroFooter">
                    <div className="hfFirst">
                        <Image
                            src={group}
                            alt="group"
                            width={60}
                            height={24}
                            priority={true} />
                        <p>1000+ Online Listeners</p>
                    </div>
                    <span className="bullet">•</span>
                    <div className="hfSecond">
                        <p>50+ live sessions hosted</p>
                    </div>
                    <span className="bullet">•</span>
                    <div className="hfThird">
                        <p>200+ podcast episodes published</p>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Hero;