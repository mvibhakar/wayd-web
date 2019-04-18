import React, { Component } from "react";
import Card from "./Card";

class Thought extends Component {
    render() {
        return (
            <div>
                <Card title="thoughts">
                    {this.props.thoughts.map((item, idx) => (
                        <p>{item.content}</p>
                    ))}
                </Card>
            </div>
        );
    }
}

export default Thought;
