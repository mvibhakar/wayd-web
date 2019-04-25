import React, { Component } from "react";
import { connect } from "react-redux";
import Thought from "../_shared/Thought";
import Schedule from "../_shared/Schedule";
import ToDo from "../_shared/ToDo";
import axios from "axios";
import { Link } from "react-router-dom";
import { saveEventsToState } from "../../state/_actions";

class Day extends Component {
    state = {
        fetchingData: false
    };

    componentWillMount() {
        console.warn("API CALL: Sending");
        this.setState({ fetchingData: true });
        axios
            .get("http://localhost:8000/api/day/2019-02-18")
            .then(response => {
                console.warn("API CALL: Success");
                console.log(response.data);
                this.props.dispatch(saveEventsToState(response.data.events));
                this.setState({ fetchingData: false });
            })
            .catch(error => {
                console.error("API CALL: Failed --------", error);
                this.setState({ fetchingData: false });
            });
    }
    render() {
        console.log(this.props.thoughts);
        return (
            <div>
                <Schedule
                    loading={this.state.fetchingData}
                    events={this.props.events || []}
                />
                <ToDo
                    loading={this.state.fetchingData}
                    todos={this.props.todos || []}
                />
                <Thought
                    loading={this.state.fetchingData}
                    thoughts={this.props.thoughts || []}
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

// export default Day;

const mapStateToProps = state => {
    const { events, todos, thoughts } = state;
    return {
        events,
        todos,
        thoughts
    };
};

export default connect(mapStateToProps)(Day);
