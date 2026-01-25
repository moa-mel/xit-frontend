"use client";
import Image from "next/image";
import Logo from "@/assets/images/Frame.png"
import hero from "@/assets/images/Group 33600.png"
import arrow from "@/assets/images/arrow right.png"
import group from "@/assets/images/Group 109.png"
import vector from "@/assets/images/Vector 7759.png"
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
                        <h1>Conversations, Your Way</h1>
                        <Image
                            src={vector}
                            alt="vector"
                            width={50}
                            height={50}
                            priority={true} />
                        <p>A clean, simple platform for live sessions and podcasts.<br />
                            Host conversations, share ideas, and engage with your<br />
                            audience.</p>
                        <div className="wrapButton">
                            <button>
                                Get Started
                            </button>
                            <Image
                                src={arrow}
                                alt="arrow icon"
                                width={50}
                                height={50}
                                priority={true}
                            />
                        </div>
                    </div>
                    <div className="hwRight">
                         <Image
                            src={hero}
                            alt="hero"
                            width={50}
                            height={50}
                            priority={true} />
                    </div>
                </div>

                <div className="heroFooter">
                    <div className="hfFirst">
                        <Image
                            src={group}
                            alt="group"
                            width={50}
                            height={50}
                            priority={true} />
                            <p>1000+ Online Listeners</p>
                    </div>
                    <span>.</span>
                    <div className="hfSecond">
                        <p>50+ live sessions hosted</p>
                    </div>
                    <span>.</span>
                    <div className="hfThird">200+ podcast episodes published</div>
                </div>
            </div>

        </div>
    )
}

export default Hero;