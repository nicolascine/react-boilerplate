import React, { Component } from 'react';

//import './App.css';

// router and deps
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Index | </Link>
          <Link to="/photos">Photos | </Link>
          <Link to="/single">Single</Link>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/photos" component={PhotoGrid} />
            <Route path="/view/:postId" component={Single} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
