import React, { Component } from "react";
import Thoughts from "../_shared/Thoughts";
import Schedule from "../_shared/Schedule";
import ToDo from "../_shared/ToDo";

class Day extends Component {
    render() {
        console.log(this.props.match);
        return (
            <div
                style={{
                    position: "absolute",
                    top: "56px",
                    bottom: "0px"
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
