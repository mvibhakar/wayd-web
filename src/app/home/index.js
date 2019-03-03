import React, { Component } from "react";
import HomeButton from "./HomeButton";
import Calendar from "./Calendar";
import "react-day-picker/lib/style.css";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    top: "56px",
                    bottom: "0px",
                    left: "0px",
                    right: "0px",
                    overflow: "auto"
                }}
            >
                <Calendar />
                <Link to="/today" style={{ backgroundColor: "green" }}>
                    <HomeButton title="to-do" />
                </Link>

                <HomeButton title="lists" />
                <HomeButton title="thoughts" />
            </div>
        );
    }
}

export default Home;
