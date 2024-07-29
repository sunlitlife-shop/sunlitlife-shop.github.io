import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Retouching from './pages/Retouching';
import Design from './pages/Design';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/photography" component={Photography} />
        <Route path="/retouching" component={Retouching} />
        <Route path="/design" component={Design} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;