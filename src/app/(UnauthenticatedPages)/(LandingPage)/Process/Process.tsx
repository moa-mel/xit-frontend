"use client";
import "./Process.css"
import Image from "next/image";
import Plus from "@/assets/images/Plus icon.png"
import Minus from "@/assets/images/Plus icon(1).png"
import { useState } from "react";

const Process = () => {
    const [expand, setExpand] = useState<number | null>(null)

    const toggleExpand = (i: number) =>{
        setExpand(expand === i ? null : i)
    }
    return (
        <div className="processSection">
            <div className={`processContainer ${expand === 0 ? 'expanded' : ''}`}>
                <div className="processWrap1">
                    <div className="processWrapLeft">
                        <h2 className="processWrapLeftText1">01</h2>
                        <h3 className="processWrapLeftText2">Live Streaming videos</h3>
                    </div>
                    <div className="processWrapRight" onClick={() => toggleExpand(0)}>
                        <Image
                            src={expand === 0 ? Minus : Plus}
                            alt={expand === 0 ? "Minus" : "Plus"}
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
                {expand === 0 && (
                    <div className="processContent">
                        <p>Live streaming videos is a feature that allows you to broadcast your content in real-time to your audience. This feature is available on our platform and can be used to create engaging and interactive content for your audience.</p>
                    </div>
                )}
            </div>
            <div className={`processContainer2 ${expand === 1 ? 'expanded' : ''}`}>
                <div className="processWrap2">
                    <div className="processWrapLeft">
                        <h2 className="processWrapLeftText1">02</h2>
                        <h3 className="processWrapLeftText2">Podcast</h3>
                    </div>
                    <div className="processWrapRight" onClick={() => toggleExpand(1)}>
                        <Image
                            src={expand === 1 ? Minus : Plus}
                            alt={expand === 1 ? "Minus" : "Plus"}
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
                {expand === 1 && (
                    <div className="processContent">
                        <p>Podcast is a feature that allows you to create and share audio content with your audience. This feature is available on our platform and can be used to create engaging and interactive content for your audience.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Process