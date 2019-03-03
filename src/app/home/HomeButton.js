import React, { Component } from "react";
import Card from "../_shared/Card";

class HomeButton extends Component {
    render() {
        return (
            <div>
                <Card>
                    <div
                        style={{
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            padding: "8px",
                            borderRadius: "10px",
                            fontSize: "19px",
                            color: "#353535",
                            textTransform: "uppercase",
                            letterSpacing: "8px"
                        }}
                    >
                        {this.props.title}
                    </div>
                </Card>
            </div>
        );
    }
}

export default HomeButton;
