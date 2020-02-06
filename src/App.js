import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import { Layout } from './components/Layout';
import NavMenu from './components/NavbarComp/NavMenu';

import { Home } from './Home';
import { About } from './About';
import { Skills } from './Skills';
import { Education } from './Education';
import { Project } from './Project';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';

import './App.css';


function App() {
  return (

    <div className="App container-fluid">
      <Router>

        <div className="backgroundBox row px-2">
          <div className="menuBox col-2 ">
            <NavMenu />
          </div>
          <div className="viewPage col-10" >

            <Layout>
              
              <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/About" component={About} />
                      <Route path="/Skills" component={Skills} />
                      <Route path="/Education" component={Education} />
                      <Route path="/Project" component={Project} />
                      <Route path="/Contact" component={Contact} />
                      <Route component={NoMatch} />
                    </Switch>
            </Layout>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
