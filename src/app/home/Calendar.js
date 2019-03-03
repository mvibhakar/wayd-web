import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { Redirect } from "react-router-dom";
import moment from "moment";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {};
    }

    Navbar({ onPreviousClick, onNextClick, className }) {
        const style = {
            position: "absolute",
            top: "1em",
            right: "1.5em",
            left: "auto",
            display: "inline-block",
            marginTop: "2px",
            width: "1.25em",
            height: "1.25em",
            backgroundPosition: "center",
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat",
            color: "#8B9898",
            cursor: "pointer"
        };

        const styleLeft = {
            marginRight: "1.5em"
        };
        return (
            <div className={className}>
                <div
                    style={{
                        ...styleLeft,
                        ...style
                    }}
                    onClick={() => onPreviousClick()}
                >
                    <i className="material-icons">keyboard_arrow_left</i>
                </div>
                <div style={style} onClick={() => onNextClick()}>
                    <i className="material-icons">keyboard_arrow_right</i>
                </div>
            </div>
        );
    }
    handleDayClick(day) {
        console.log(moment(day).format("DD-MM-YYYY"));
        this.setState({
            selectedDay: day
        });
    }

    render() {
        if (this.state.selectedDay) {
            return (
                <Redirect
                    to={`/day/${moment(this.state.selectedDay).format(
                        "DD-MM-YYYY"
                    )}`}
                />
            );
        }

        return (
            <div
                style={{
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    margin: "20px",
                    marginTop: "10px",
                    fontSize: "18px",
                    color: "black",
                    borderRadius: "10px",
                    alignItems: "center"
                }}
            >
                <DayPicker
                    onDayClick={this.handleDayClick}
                    navbarElement={this.Navbar}
                    modifiers={{
                        day: day => true
                    }}
                    modifiersStyles={{
                        today: {
                            color: "white",
                            backgroundColor: "#7EB4CE"
                        },
                        day: {
                            padding: "15px"
                        }
                    }}
                />
            </div>
        );
    }
}

export default Calendar;
