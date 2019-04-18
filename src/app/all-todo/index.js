import React, { Component } from "react";
import ToDo from "../_shared/ToDo";

class ToDos extends Component {
    state = {
        items: {
            todos: []
        },
        fetchingData: false
    };

    render() {
        return (
            <div>
                <ToDo todos={this.state.items.todos} />
            </div>
        );
    }
}

export default ToDos;
