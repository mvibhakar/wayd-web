import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    top: "56px",
                    bottom: "0px",
                    left: "0px",
                    right: "0px",
                    overflow: "auto"
                }}
            >
                <h1
                    style={{
                        fontWeight: "normal",
                        letterSpacing: "10px",
                        textAlign: "center"
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
                        marginBottom: "30px"
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
                        margin: "0 auto"
                    }}
                >
                    <i class="material-icons" style={{ margin: "5px" }}>
                        lock_outline
                    </i>
                    <form>
                        <input
                            type="text"
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
            </div>
        );
    }
}

export default Login;
