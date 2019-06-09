import React, { Component } from "react";
import {
    BrowserRouter as Router,
    // PrivateRoute,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import Header from "./_shared/Header";
import Day from "./day";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import ToDos from "./all-todo";
import Lists from "./all-lists";
import Thoughts from "./all-thoughts";
import CreateChoice from "./create-choice";
import CreateEvent from "./create-event";
import CreateToDo from "./create-todo";
import CreateThought from "./create-thought";

import { setCuser, setToken } from "../state/_actions";
import axios from "axios";

const isAuthenticated = () => localStorage.getItem("token") && true;
export const token = () => localStorage.getItem("token");

class App extends Component {
    state = { loading: true };

    componentWillMount() {
        if (isAuthenticated()) {
            // go get cuser then show the main screen
            axios
                .get("http://localhost:8000/api/user/", {
                    headers: {
                        Authorization: "Bearer " + token()
                    }
                })
                .then(response => {
                    this.props.dispatch(setCuser(response.data.user));
                    this.setState({ loading: false });
                })
                .catch(error => {
                    console.warn("failed to authorize", error);
                    this.setState({ loading: false });
                    this.props.dispatch(setCuser());
                    this.props.dispatch(setToken());
                });
        } else {
            // just show login screen like normal
            this.setState({ loading: false });
        }
    }

    render() {
        console.log(typeof Day);
        return (
            <Router>
                <div>
                    <Header title="wayd" />
                    <div
                        style={{
                            margin: "56px auto 0",
                            maxWidth: "600px"
                        }}
                    >
                        {this.state.loading && <div>Loading...</div>}
                        {!this.state.loading && (
                            <Switch>
                                <Route path="/login" component={Login} />
                                <Route path="/signup" component={Signup} />
                                <PrivateRoute exact path="/" component={Home} />
                                <PrivateRoute
                                    path="/day/:date"
                                    component={Day}
                                />
                                <PrivateRoute
                                    path="/to-dos"
                                    component={ToDos}
                                />
                                <PrivateRoute path="/lists" component={Lists} />
                                <PrivateRoute
                                    path="/thoughts"
                                    component={Thoughts}
                                />
                                <PrivateRoute
                                    path="/create-choice"
                                    component={CreateChoice}
                                />
                                <PrivateRoute
                                    path="/create-event"
                                    component={CreateEvent}
                                />
                                {/* <PrivateRoute path="/create-todo" component={CreateToDo} /> */}
                                {/* <PrivateRoute
                                path="/create-thought"
                                component={CreateThought}
                            /> */}
                                <PrivateRoute path="/to-dos/:id" />
                                <Redirect to="/" />
                            </Switch>
                        )}
                    </div>
                </div>
            </Router>
        );
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default connect()(App);
