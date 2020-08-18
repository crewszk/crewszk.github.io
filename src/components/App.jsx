import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component ={Home} />
                        <Route path="/projects" component ={Projects} />
                        <Route path="/contact" component ={Contact} />
                        <Route component ={NoMatch} />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}