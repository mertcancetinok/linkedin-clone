import React from 'react';
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets(props) {

    const newArticle = (heading,subtitle) => {
        return (<div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
    }

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon/>
            </div>
            {newArticle("React is back","Top news - 9099 readers")}
            {newArticle("Coronavirus: UK updates","Top news - 886 readers")}
            {newArticle("Tesla hits new highs","Cars & auto - 300 readers")}
            {newArticle("Bitcoin Breaks $22k","Crypto - 8000 readers")}
            {newArticle("Is Redux too good?","Code - 123 readers")}
            {newArticle("New king is Charles","Top news - 6503 readers")}
        </div>
    );
}

export default Widgets;