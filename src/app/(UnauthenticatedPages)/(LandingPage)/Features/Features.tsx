"use client";
import "./Features.css"
import Image from "next/image";
import { useState } from "react";
import arrow from "@/assets/images/arrow right.png"
import video from "@/assets/images/Group 33566.png"
import podcast from "@/assets/images/Group 33567.png"

const Features = () => {

    return (
        <div className="featureSection">
            <div className="featureContainer">
                <div className="featureHeader">
                    <h3>One single platform</h3>
                    <h2>Two Ways To Connect</h2>
                </div>
                <div className="featureWrap">
                    <div className="featureLeft">
                        <div className="mainFeature">
                            <div className="featureItem">
                                <Image
                                    src={video}
                                    alt="video"
                                    width={20}
                                    height={20}
                                    priority={true}
                                />
                                <p>Live Streaming</p>
                                <span>Host conversations as they happen.<br />
                                    Join discussions, listen in, and engage with <br />
                                    others — all in the moment.</span>
                            </div>
                            <div className="featureItem">
                                <Image
                                    src={podcast}
                                    alt="podcast"
                                    width={20}
                                    height={20}
                                    priority={true}
                                />
                                <p>Podcasts</p>
                                <span>Publish structured, on-demand episodes <br />
                                    your audience can listen to anytime.</span>
                            </div>
                        </div>
                    </div>
                    <div className="featureRight">
                        <h3>Choose how you want to share.</h3>
                        <p>Go live, publish podcasts, or do both without setting up multiple tools or workflows.</p>
                        <button>
                            Get Started
                            <Image
                                src={arrow}
                                alt="arrow icon"
                                width={20}
                                height={20}
                                priority={true}
                            />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features