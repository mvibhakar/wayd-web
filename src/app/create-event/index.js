import React, { Component } from "react";
import HomeButton from "../_shared/HomeButton";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "../_shared/Card";
import Switch from "@material-ui/core/Switch";
import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
    colorSwitchBase: {
        color: grey,
        "&$colorChecked": {
            color: "#7EB4CE",
            "& + $colorBar": {
                backgroundColor: "#7EB4CE"
            }
        }
    },
    colorBar: {},
    colorChecked: {}
});

class CreateEvent extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Card>
                <div
                    style={{
                        padding: "10px"
                    }}
                >
                    <div
                        style={{
                            margin: "0 10px 20px",
                            padding: "0 0 10px",
                            borderBottom: "0.5px solid #D8D8D8"
                        }}
                    >
                        <form>
                            <input
                                type="text"
                                name="user_email"
                                placeholder="Enter event title"
                                style={{
                                    border: "none",
                                    fontFamily: "Raleway, sans-serif",
                                    letterSpacing: "1px",
                                    fontSize: "18px"
                                }}
                            />
                        </form>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            padding: "0 10px",
                            fontSize: "15px",
                            letterSpacing: "1px",
                            margin: "0 auto"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                width: "50%",
                                alignItems: "center",
                                justifyContent: "start"
                            }}
                        >
                            All-day
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "50%",
                                // marginLeft: "auto",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Switch
                                classes={{
                                    switchBase: classes.colorSwitchBase,
                                    checked: classes.colorChecked,
                                    bar: classes.colorBar
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default withStyles(styles)(CreateEvent);
