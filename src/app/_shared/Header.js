import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
    state = {
        path: this.props.location.pathname
    };
    componentWillMount() {
        this.props.history.listen(location => {
            this.setState({ path: location.pathname });
        });
    }

    getHeaderName = () => {
        let title = "wayd";

        if (this.state.path.includes("/day")) {
            // show today if it's today
            // show tomorrow if it's tomorrow
            // show yesterday ...
            // show christmas if it's christmas?
            title = this.state.path.split("/")[2];
        }

        return title;
    };

    getHeaderCenterAction = () => {
        if (this.state.path === "/login") {
            return null;
        } else {
            return (
                <div>
                    <Link
                        to="/"
                        style={{
                            flex: "3",
                            paddingTop: "5px",
                            textAlign: "start"
                        }}
                    >
                        <i className="material-icons">close</i>
                    </Link>
                </div>
            );
        }
    };

    getHeaderLeftAction = () => {
        if (this.state.path === "/" || this.state.path === "/login") {
            return null;
        } else {
            return (
                <Link
                    to="/"
                    style={{
                        flex: "3",
                        paddingTop: "5px",
                        textAlign: "start"
                    }}
                >
                    <i className="material-icons">close</i>
                </Link>
            );
        }
    };

    getHeaderRightAction = () => {
        if (this.state.path === "/" || this.state.path === "/login") {
            return null;
        } else {
            return (
                <div
                    style={{
                        flex: "3"
                    }}
                >
                    <i
                        className="material-icons"
                        style={{
                            marginRight: "0.5em"
                        }}
                    >
                        keyboard_arrow_left
                    </i>
                    <i className="material-icons">keyboard_arrow_right</i>
                </div>
            );
        }
    };

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
                    textAlign: "center"
                }}
            >
                <div
                    style={{
                        flex: "1"
                    }}
                />
                <div>{this.getHeaderLeftAction()}</div>
                <div
                    style={{
                        flex: "12",
                        fontSize: "19px",
                        color: "#353535",
                        textTransform: "uppercase",
                        letterSpacing: "8px",
                        textAlign: "center"
                    }}
                >
                    <div>{this.getHeaderName()}</div>
                </div>
                <div>{this.getHeaderRightAction()}</div>
                <div
                    style={{
                        flex: "1"
                    }}
                />
            </div>
        );
    }
}

export default withRouter(Header);
