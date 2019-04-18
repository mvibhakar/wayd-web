import React, { Component } from "react";
import Card from "./Card";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";

class ToDo extends Component {
    handleChange = (event, idx) => {
        const isChecked = event.target.checked;
        const items = this.props.todos;

        items[idx].checked = isChecked;
        this.setState({ items });
    };

    render() {
        return (
            <div>
                <Card title="to-do">
                    {this.props.todos.map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: "flex",
                                borderBottom: "0.5px solid #D8D8D8",
                                marginBottom: "15px",
                                paddingBottom: "5px"
                            }}
                        >
                            <Checkbox
                                checked={item.checked}
                                onChange={event =>
                                    this.handleChange(event, idx)
                                }
                                value="box1"
                                style={{
                                    color: "#A3A3A3",
                                    fill: "white",
                                    textAlign: "left",
                                    marginLeft: "-15px",
                                    height: "0px"
                                }}
                            />
                            <Link
                                to="/login"
                                style={{
                                    paddingTop: "3px"
                                }}
                            >
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </Card>
            </div>
        );
    }
}

export default ToDo;
