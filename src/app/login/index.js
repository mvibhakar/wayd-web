import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { setCuser, setToken } from "../../state/_actions";

const blankForm = {
    email: "",
    password: ""
};

class Login extends Component {
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
        if (this.state.loading) return;
        this.setState({
            loading: true
        });
        axios
            .post("http://localhost:8000/api/login/", {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                this.props.dispatch(setToken(response.data.token));
                this.props.dispatch(setCuser(response.data.user));
                this.setState({
                    errorText: "",
                    loading: false,
                    loginSuccessful: true
                });
            })
            .catch(error => {
                if (error) {
                    this.setState({
                        errorText: "Incorrect email and password.",
                        loading: false
                    });
                    console.log(error);
                }
            });
    };

    render() {
        if (this.state.loginSuccessful) {
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
                        name="user_email"
                        placeholder="Email"
                        value={this.state.email}
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
                        marginBottom: "25px"
                    }}
                >
                    <i class="material-icons" style={{ margin: "5px" }}>
                        lock_outline
                    </i>
                    <input
                        type="password"
                        value={this.state.password}
                        name="user_password"
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
                        Log In
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
                        Don't have an account?
                    </div>
                    <div
                        style={{
                            display: "inline-block",
                            color: "#7EB4CE"
                        }}
                    >
                        <Link to="/signup">Create one.</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Login);
