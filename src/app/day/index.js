import React, { Component } from "react";
import Thought from "../_shared/Thought";
import Schedule from "../_shared/Schedule";
import ToDo from "../_shared/ToDo";
import axios from "axios";
import { Link } from "react-router-dom";

class Day extends Component {
    state = {
        items: {
            events: [],
            todos: [],
            thoughts: []
        },
        fetchingData: false
    };

    componentWillMount() {
        console.warn("API CALL: Sending");
        this.setState({ fetchingData: true });
        axios
            .get("http://localhost:8000/api/day/2019-02-18")
            .then(response => {
                console.warn("API CALL: Success");
                const items = response.data;
                this.setState({ items });
                this.setState({ fetchingData: false });
            })
            .catch(error => {
                console.error("API CALL: Failed --------", error);
                this.setState({ fetchingData: false });
            });
    }
    render() {
        console.log(this.state.items.thoughts);
        return (
            <div>
                <Schedule
                    loading={this.state.fetchingData}
                    events={this.state.items.events}
                />
                <ToDo
                    loading={this.state.fetchingData}
                    todos={this.state.items.todos}
                />
                <Thought
                    loading={this.state.fetchingData}
                    thoughts={this.state.items.thoughts}
                />
                <div>
                    <Link to="/create-choice">
                        <img
                            src={require("./blue-button.png")}
                            alt="add a new thing"
                            style={{
                                position: "fixed",
                                height: "60px",
                                width: "60px",
                                bottom: "15px",
                                right: "15px"
                            }}
                        />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Day;
