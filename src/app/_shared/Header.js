import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";

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
            var current = moment();

            var dateStringFromUrl = this.state.path.split("/")[2];
            dateStringFromUrl = dateStringFromUrl.split("-");
            var todayDate = new Date(
                dateStringFromUrl[2],
                dateStringFromUrl[1] - 1,
                dateStringFromUrl[0]
            );
            var date = moment(todayDate);
            var yesterday = moment(todayDate, "DD-MM-YYYY").subtract(1, "days");
            var tomorrow = moment(todayDate, "DD-MM-YYYY").add(1, "days");
            if (date.isSame(current, "d")) {
                title = "today";
            } else if (yesterday.isSame(current, "d")) {
                title = "tomorrow";
            } else if (tomorrow.isSame(current, "d")) {
                title = "yesterday";
            } else {
                title = moment(date).format("MMMM Do");
            }
        } else if (
            this.state.path.includes("/login") ||
            this.state.path.includes("/signup") ||
            this.state.path.includes("/create-choice")
        ) {
            title = "";
        }
        return title;
    };

    getHeaderCenterAction = () => {
        if (
            this.state.path === "/login" ||
            this.state.path === "/signup" ||
            this.state.path === "/create-choice"
        ) {
            return null;
        } else {
            return (
                <div>
                    <Link to="/">
                        <i className="material-icons">close</i>
                    </Link>
                </div>
            );
        }
    };

    getHeaderLeftAction = () => {
        if (
            this.state.path === "/" ||
            this.state.path === "/login" ||
            this.state.path === "/signup"
        ) {
            return null;
        } else {
            return (
                <Link to="/">
                    <i className="material-icons">close</i>
                </Link>
            );
        }
    };

    getHeaderRightAction = () => {
        if (
            this.state.path === "/" ||
            this.state.path === "/login" ||
            this.state.path === "/signup" ||
            this.state.path === "/create-choice"
        ) {
            return null;
        } else if (this.state.path.includes("/day")) {
            var dateStringFromUrl = this.state.path.split("/")[2];
            dateStringFromUrl = dateStringFromUrl.split("-");
            var todayDate = new Date(
                dateStringFromUrl[2],
                dateStringFromUrl[1] - 1,
                dateStringFromUrl[0]
            );
            var yesterday = moment(todayDate, "DD-MM-YYYY").subtract(1, "days");
            var tomorrow = moment(todayDate, "DD-MM-YYYY").add(1, "days");
            return (
                <div>
                    <Link to={`/day/${yesterday.format("DD-MM-YYYY")}`}>
                        <i
                            className="material-icons"
                            style={{
                                marginRight: "15px"
                            }}
                        >
                            keyboard_arrow_left
                        </i>
                    </Link>
                    <Link to={`/day/${tomorrow.format("DD-MM-YYYY")}`}>
                        <i className="material-icons">keyboard_arrow_right</i>
                    </Link>
                </div>
            );
        }
    };

    render() {
        return (
            <div
                style={{
                    height: "56px",
                    background: "#F5F5F5",
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    zIndex: "1"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "560px",
                        height: "56px",
                        margin: "0 auto",
                        padding: "0 20px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: "65px",
                            justifyContent: "start",
                            alignItems: "center",
                            paddingTop: "5px"
                        }}
                    >
                        <div>{this.getHeaderLeftAction()}</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            fontSize: "19px",
                            color: "#353535",
                            textTransform: "uppercase",
                            letterSpacing: "8px",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <div>{this.getHeaderName()}</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "65px",
                            justifyContent: "end",
                            alignItems: "end",
                            paddingTop: "5px"
                        }}
                    >
                        <div>{this.getHeaderRightAction()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
