import React from "react";
import "../Main/Main.css";
import { SiGooglegemini } from "react-icons/si";
import { BiCodeAlt, BiSolidBulb, BiSolidCompass } from "react-icons/bi";
import { LuMessageCircle } from "react-icons/lu";
import { GrGallery, GrSend } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa";

export const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <SiGooglegemini />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Ian.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <BiSolidCompass className="card-icon"/>
                    </div>
                    <div className="card">
                        <p>Briefly summarize the concept of urban planning</p>
                        <BiSolidBulb className="card-icon"/>
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <LuMessageCircle className="card-icon"/>
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <BiCodeAlt className="card-icon"/>
                    </div>
                    <div className="main-bottom">
                        <div className="search-box">
                            <input type="text" placeholder="Enter Prompt" />
                            <div className="search-icon">
                                <GrGallery />
                                <FaMicrophone />
                                <GrSend />
                            </div>
                        </div>
                        <p className="bottom-info"> Gemini may display inaccurate info, including info about people, or places, so please double-check its responses. Always cross-reference your responses with information from other sources! </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

