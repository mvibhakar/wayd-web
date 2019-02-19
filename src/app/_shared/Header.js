import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "56px",
                    background: "#F5F5F5",
                    position: "absolute",
                    top: "0px",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <Link to="/"
                    style={{
                        flex: "1",
                        paddingTop: "5px"
                    }}
                >
                    <i className="material-icons">close</i>
                </Link>
                <div
                    style={{
                        flex: "5",
                        fontSize: "19px",
                        color: "#353535",
                        textTransform: "uppercase",
                        letterSpacing: "8px"
                    }}
                >
                    <div>{this.props.title}</div>
                </div>
                <div
                    style={{
                        flex: "1"
                    }}
                />
            </div>
        );
    }
}

export default Header;
