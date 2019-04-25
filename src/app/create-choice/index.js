import React, { Component } from "react";
import HomeButton from "../_shared/HomeButton";
import { Link } from "react-router-dom";

class CreateChoice extends Component {
    render() {
        return (
            <div>
                <div>
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
