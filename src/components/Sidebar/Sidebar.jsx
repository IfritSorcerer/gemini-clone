import React, { useState } from "react";
import "../Sidebar/Sidebar.css"
import { CiMenuBurger, CiSettings, CiSquarePlus, CiSquareQuestion } from "react-icons/ci";
import { LuHistory, LuMessageCircle } from "react-icons/lu";


export const Sidebar = () => {

    const [extended, setExtended] = useState(false);


    return (
        <div className="sidebar">
            <div className="top">
                <CiMenuBurger  className="menu" onClick={() => setExtended(prev => !prev)}/>
                <div className="new-chat">
                    <CiSquarePlus className="sidebar-icon"/>
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended
                ?<div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <LuMessageCircle className="sidebar-icon"/>
                        {extended?<p>What Am I?. . .</p>:null}
                    </div>
                </div>
                :null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <CiSquareQuestion className="sidebar-icon"/>
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <LuHistory className="sidebar-icon"/>
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <CiSettings className="sidebar-icon"/>
                    {extended?<p>Setting</p>:null}
                </div>
            </div>
        </div>
    )
}