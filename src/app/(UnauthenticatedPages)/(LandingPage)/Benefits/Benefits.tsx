"use client";
import "./Benefits.css"
import Image from "next/image";
import group from "@/assets/images/Group 33632.png"
import Icon from "@/assets/images/Icon.png"
import Icon2 from "@/assets/images/Icon(1).png"
import Icon3 from "@/assets/images/Icon(2).png"


const Benefits = () => {
    return (
        <div className="benefitSection">
            <div className="benefitContainer">
                <h3 className="benefitHeader">WHAT YOU CAN DO</h3>
                <div className="benefitMain">
                    <div>
                        <h1>Create On-Demand <br />
                            Podcasts <span> Effortlessly</span></h1>
                        <div className="benefitItems">
                            <div className="benefitList">
                                <Image
                                    src={Icon}
                                    alt="Icon"
                                    width={40}
                                    height={40}
                                    priority={true}
                                />
                                <div>
                                    <p>Easy Episode Uploads</p>
                                    <span>Quickly upload your audio files and get <br />
                                        them live.</span>
                                </div>
                            </div>
                            <div className="benefitList">
                                <Image
                                    src={Icon2}
                                    alt="Icon2"
                                    width={40}
                                    height={40}
                                    priority={true}
                                />
                                <div>
                                    <p>Organize Into Series</p>
                                    <span>Group episodes into seasons or themes <br />
                                        for easy navigation.</span>
                                </div>
                            </div>
                            <div className="benefitList">
                                <Image
                                    src={Icon3}
                                    alt="Icon3"
                                    width={40}
                                    height={40}
                                    priority={true}
                                />
                                <div>
                                    <p>Background Listening</p>
                                    <span>Let your audience listen while multitasking <br />
                                        on their devices.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Image
                            src={group}
                            alt="group"
                            className="groupImage"
                            priority={true} />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Benefits;