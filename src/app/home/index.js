import React, { Component } from "react";
import HomeButton from "../_shared/HomeButton";
import Calendar from "./Calendar";
import "react-day-picker/lib/style.css";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div
                style={{
                    margin: "56px auto 0",
                    maxWidth: "600px",
                    overflow: "auto"
                }}
            >
                <Calendar />

                <Link to="/to-dos">
                    <HomeButton title="to-do" />
                </Link>
                <Link to="/lists">
                    <HomeButton title="lists" />
                </Link>
                <Link to="/thoughts">
                    <HomeButton title="thoughts" />
                </Link>
            </div>
        );
    }
}

export default Home;
