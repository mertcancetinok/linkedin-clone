import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import svg from "../assets/user-bg.svg"

export default function Sidebar() {

    const recentItem = (topic) => {
        return (<div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
    }

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src={svg} alt="user bg" />
            <Avatar className="sidebar__avatar"/>
            <h2>Mert Can Çetinok</h2>
            <h4>cetinokmertcan@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">
                    2,543
                </p>
            </div>
            <div className="sidebar__stat">
                <p>View on post</p>
                <p className="sidebar__statNumber">
                    2,448
                </p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}
