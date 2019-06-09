import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { setCuser, setToken } from "../../state/_actions";

const blankForm = {
    first_name: "",
    email: "",
    password: "",
    password2: ""
};

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = blankForm;
    }

    handleInputChange = (event, type) => {
        let statechange = {};
        statechange[type] = event.target.value;
        this.setState(statechange);
    };

    submit = () => {
        console.log(this.state);
        if (this.state.loading) return;
        if (
            !this.state.first_name ||
            !this.state.email ||
            !this.state.password
        ) {
            this.setState({
                errorText: "Please fill out all fields."
            });
            return;
        }
        if (this.state.password !== this.state.password2) {
            this.setState({
                errorText: "The passwords don't match."
            });
            return;
        }

        this.setState({
            loading: true
        });
        axios
            .post("http://localhost:8000/api/signup/", {
                email: this.state.email,
                password: this.state.password,
                first_name: this.state.first_name
            })
            .then(response => {
                console.log(response.data);
                this.props.dispatch(setToken(response.data.token));
                this.props.dispatch(setCuser(response.data.user));
                this.setState({
                    errorText: "",
                    loading: false,
                    signupSuccessful: true
                });
            })
            .catch(error => {
                this.setState({
                    errorText:
                        "There was an error signing up, please try again.",
                    loading: false
                });
            });
    };

    render() {
        if (this.state.signupSuccessful) {
            return <Redirect to="/" />;
        }

        return (
            <div
                style={{
                    position: "fixed",
                    width: "100%",
                    top: "150px",
                    left: "0px",
                    right: "0px",
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <h1
                    style={{
                        fontWeight: "normal",
                        letterSpacing: "10px",
                        textAlign: "center",
                        marginBottom: "40px",
                        fontSize: "30px"
                    }}
                >
                    WAYD
                </h1>
                <div
                    style={{
                        borderBottom: "0.5px solid #D8D8D8",
                        display: "flex",
                        width: "300px",
                        margin: "0 auto",
                        marginBottom: "35px"
                    }}
                >
                    <i class="material-icons" style={{ margin: "5px" }}>
                        person_outline
                    </i>
                    <input
                        type="text"
                        name="user_first_name"
                        value={this.state.first_name}
                        placeholder="First Name"
                        onChange={event =>
                            this.handleInputChange(event, "first_name")
                        }
                        style={{
                            backgroundColor: "#f5f5f5",
                            border: "none",
                            marginLeft: "20px",
                            marginTop: "5px",
                            fontFamily: "Raleway, sans-serif",
                            letterSpacing: "2px",
                            fontSize: "17px"
                        }}
                    />
                </div>
                <div
                    style={{
                        borderBottom: "0.5px solid #D8D8D8",
                        display: "flex",
                        width: "300px",
                        margin: "0 auto",
                        marginBottom: "35px"
                    }}
                >
                    <i class="material-icons" style={{ margin: "5px" }}>
                        person_outline
                    </i>
                    <input
                        type="text"
                        name="user_email"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={event =>
                            this.handleInputChange(event, "email")
                        }
                        style={{
                            backgroundColor: "#f5f5f5",
                            border: "none",
                            marginLeft: "20px",
                            marginTop: "5px",
                            fontFamily: "Raleway, sans-serif",
                            letterSpacing: "2px",
                            fontSize: "17px"
                        }}
                    />
                </div>

                <div
                    style={{
                        borderBottom: "0.5px solid #D8D8D8",
                        display: "flex",
                        width: "300px",
                        margin: "0 auto",
                        marginBottom: "35px"
                    }}
                >
                    <i class="material-icons" style={{ margin: "5px" }}>
                        lock_outline
                    </i>
                    <input
                        type="password"
                        name="user_password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={event =>
                            this.handleInputChange(event, "password")
                        }
                        style={{
                            backgroundColor: "#f5f5f5",
                            border: "none",
                            marginLeft: "20px",
                            marginTop: "5px",
                            fontFamily: "Raleway, sans-serif",
                            letterSpacing: "2px",
                            fontSize: "17px"
                        }}
                    />
                </div>
                <div
                    style={{
                        borderBottom: "0.5px solid #D8D8D8",
                        display: "flex",
                        width: "300px",
                        margin: "0 auto",
                        marginBottom: "25px"
                    }}
                >
                    <i class="material-icons" style={{ margin: "5px" }}>
                        lock_outline
                    </i>
                    <input
                        type="password"
                        name="user_verify"
                        placeholder="Verify Password"
                        onChange={event =>
                            this.handleInputChange(event, "password2")
                        }
                        style={{
                            backgroundColor: "#f5f5f5",
                            border: "none",
                            marginLeft: "20px",
                            marginTop: "5px",
                            fontFamily: "Raleway, sans-serif",
                            letterSpacing: "2px",
                            fontSize: "17px"
                        }}
                    />
                </div>
                <div>{this.state.errorText}</div>
                <div
                    style={{
                        width: "300px",
                        display: "flex",
                        margin: "0 auto",
                        marginTop: "15px"
                    }}
                >
                    <button
                        onClick={this.submit}
                        style={{
                            backgroundColor: "#7EB4CE",
                            width: "300px",
                            padding: "15px",
                            fontFamily: "Raleway, sans-serif",
                            textTransform: "uppercase",
                            fontSize: "18px",
                            letterSpacing: "8px",
                            borderRadius: "10px",
                            border: "none",
                            color: "white"
                        }}
                    >
                        Sign Up
                    </button>
                </div>
                <div
                    style={{
                        marginTop: "20px",
                        fontSize: "15px",
                        letterSpacing: "1px"
                    }}
                >
                    <div
                        style={{
                            display: "inline-block",
                            marginRight: "5px"
                        }}
                    >
                        Have an account already?
                    </div>
                    <div
                        style={{
                            display: "inline-block",
                            color: "#7EB4CE"
                        }}
                    >
                        <Link to="/login">Log in.</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Signup);
