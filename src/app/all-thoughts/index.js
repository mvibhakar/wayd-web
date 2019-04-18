import React, { Component } from "react";
import Thought from "../_shared/Thought";

class Thoughts extends Component {
    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    top: "56px",
                    bottom: "0px"
                }}
            >
                <Thought />
            </div>
        );
    }
}

export default Thoughts;
