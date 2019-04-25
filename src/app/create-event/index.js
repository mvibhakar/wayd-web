import React, { Component } from "react";
import HomeButton from "../_shared/HomeButton";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "../_shared/Card";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
                        margin: "0 10px 20px",
                        padding: "0 0 10px",
                        fontSize: "15px",
                        letterSpacing: "1px",
                        width: "100%"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flex: "1",
                            alignItems: "center",
                            justifyContent: "start"
                        }}
                    >
                        All-day
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flex: "1",
                            marginLeft: "auto"
                        }}
                    >
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Switch
                                        classes={{
                                            switchBase: classes.colorSwitchBase,
                                            checked: classes.colorChecked,
                                            bar: classes.colorBar
                                        }}
                                    />
                                }
                            />
                        </FormGroup>
                    </div>
                </div>
            </Card>
        );
    }
}

export default withStyles(styles)(CreateEvent);
