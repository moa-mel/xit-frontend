"use client";
import "./WhatWeOffer.css"
import Image from "next/image";
import { useState } from "react";
import groups from "@/assets/images/Image(1).png"
import circleArrow from "@/assets/images/Frame 2121453332.png"
import offer from "@/assets/images/Group 33654.png"

const WhatWeOffer = () => {

    return (
        <div className="offerSection">
            <div className="offerContainer">
                <div className="offerUp">
                    <div className="offerItems">
                        <div className="offerHead">
                            <h3>POWERFUL TOOLS</h3>
                            <h4>Bring Moments To <span style={{color: '#60D5E8'}}>Life</span></h4>
                        </div>
                        <div>
                            <Image
                                src={offer}
                                alt="offer"
                                priority={true}
                            />
                            <div className="offerList">
                                <p>Multi-Host Sessions</p>
                                <p>Co-Hosting</p>
                            </div>
                            <div className="offerList">
                                <p>Engagement Tools</p>
                                <p>Live Chat & Reactions</p>
                            </div>
                            <div className="offerList">
                                <p>Session Setup</p>
                                <p>Scheduled/Instant Lives</p>
                            </div>
                            <div className="offerList">
                                <p>Focused Sessions</p>
                                <p>Pinned Talking Points</p>
                            </div>
                            <div className="offerList">
                                <p>Session Control</p>
                                <p>Host Moderation Tools</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offerDown">
                    <div>
                        <Image
                            src={groups}
                            alt="groups"
                            className="groupsImage"
                            priority={true} />
                    </div>
                    <div className="offerDescrip">
                        <h1>Press Play. Join The <span>Moment.</span></h1>
                        <p>Millions of people are already talking. Drop into live conversations<br />
                            or explore podcasts from people all over the world.<br />
                            All you have to do is press play.</p>
                        <button>Listen Now
                            <Image
                                src={circleArrow}
                                alt="circleArrow"
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

export default WhatWeOffer