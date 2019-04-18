import React, { Component } from "react";
import HomeButton from "../_shared/HomeButton";
import { Link } from "react-router-dom";

class CreateChoice extends Component {
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
                <p
                    style={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        fontWeight: "normal",
                        letterSpacing: "6px",
                        fontSize: "12px",
                        marginTop: "50px",
                        marginBottom: "15px"
                    }}
                >
                    Add something to your...
                </p>
                <div
                    style={{
                        color: "#7EB4CE"
                    }}
                >
                    <Link to="/create-event">
                        <HomeButton title="schedule" />
                    </Link>
                    <Link to="/create-todo">
                        <HomeButton title="to-do" />
                    </Link>
                    <Link to="/create-thought">
                        <HomeButton title="thoughts" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default CreateChoice;
