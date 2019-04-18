import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
    render() {
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
                    <form>
                        <input
                            type="text"
                            name="user_email"
                            placeholder="Email"
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
                    </form>
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
                    <form>
                        <input
                            type="password"
                            name="user_password"
                            placeholder="Password"
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
                    </form>
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
                    <form>
                        <input
                            type="password"
                            name="user_verify"
                            placeholder="Verify Password"
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
                    </form>
                </div>
                <div
                    style={{
                        width: "300px",
                        display: "flex",
                        margin: "0 auto",
                        marginTop: "15px"
                    }}
                >
                    <form>
                        <button
                            name="Submit"
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
                    </form>
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

export default Signup;
