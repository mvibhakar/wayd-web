import React, { Component } from "react";
import Header from "./_shared/Header";
import Day from "./day";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import ToDos from "./all-todo";
import Lists from "./all-lists";
import Thoughts from "./all-thoughts";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import CreateChoice from "./create-choice";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header title="wayd" />
                    <div
                        style={{
                            margin: "56px auto 0",
                            maxWidth: "500px"
                        }}
                    >
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/day/:date" component={Day} />
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/to-dos" component={ToDos} />
                            <Route path="/lists" component={Lists} />
                            <Route path="/thoughts" component={Thoughts} />
                            <Route
                                path="/create-choice"
                                component={CreateChoice}
                            />
                            <Route path="/to-dos/:id" />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
