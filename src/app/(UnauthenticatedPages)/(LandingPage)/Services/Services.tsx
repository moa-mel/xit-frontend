"use client";
import "./Services.css"
import Image from "next/image";
import Link from "next/link";
import illustration1 from "@/assests/images/Illustration(2).png"
import illustration2 from "@/assests/images/Illustration(3).png"
import ArrowUp from "@/assests/images/Icon(1).png"

const Services = () => {
    return (
        <div className="serviceSection">
            <div className="serviceText">
                <h3>Services</h3>
                <p>At our digital marketing agency, we offer a range of services <br /> to help businesses grow and succeed online. These services include:</p>
            </div>
            <div className="serviceContainer">
                <div className="serviceCard1">
                    <div className="serviceCard1Content">
                        <div className="servviceCard1Left">
                            <h3 className="serviceCard1Text">Live Streaming</h3>
                            <div className="serviceCard1TextButton">
                                <Image
                                    src={ArrowUp}
                                    alt="arrowUp"
                                    width={20}
                                    height={20}
                                />
                                <p>Learn more</p>
                            </div>
                        </div>
                        <div className="serviceCard1Image">
                            <Image
                                src={illustration1}
                                alt="illustration1"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                </div>
                <div className="serviceCard2">
                    <div className="serviceCard2Content">
                        <div className="servviceCard2Left">
                            <h3 className="serviceCard2Text">Podcast</h3>
                            <div className="serviceCard2TextButton">
                                <Image
                                    src={ArrowUp}
                                    alt="arrowUp"
                                    width={20}
                                    height={20}
                                />
                                <p>Learn more</p>
                            </div>
                        </div>

                        <div className="serviceCard2Image">
                            <Image
                                src={illustration2}
                                alt="illustration2"
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Services;