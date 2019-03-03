import React, { Component } from "react";
import Thoughts from "../_shared/Thoughts";
import Schedule from "../_shared/Schedule";
import ToDo from "../_shared/ToDo";

class Day extends Component {
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
                <Schedule />
                <ToDo />
                <Thoughts />
            </div>
        );
    }
}

export default Day;
