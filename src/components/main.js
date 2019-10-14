// import React from 'react';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingpage';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';
import Sent from './sent';


class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/aboutme" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/sent" component={Sent} />
                </Switch>
            </div>
        );
    }
}

export default Main;