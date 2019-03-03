import React, { Component } from "react";
import Header from "./_shared/Header";
import Day from "./day";
import Home from "./home";
import Login from "./login";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header title="wayd" />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/day/:date" component={Day} />
                        <Route path="/login" component={Login} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
