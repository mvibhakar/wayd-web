import React, { Component } from "react";
import Header from "./_shared/Header";
import Day from "./day";
import Home from "./home";
import {
    BrowserRouter as Router,
    Route,
    // Link,
    Switch,
    Redirect
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                {/* style={{
                    overflow: 'auto',
                }} */}
                {/* <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                }}> */}
                <Header title="wayd" />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/day/:date" component={Day}/>
                        <Redirect to='/' />
                    </Switch>
                {/* </div> */}
                    
                </div>
            </Router>
            // <div>
            //     <Header title="wayd" />
            //     {/* <Home /> */}
            //     <Today />
            // </div>
        );
    }
}

export default App;
