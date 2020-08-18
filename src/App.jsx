import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';


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

export default App;