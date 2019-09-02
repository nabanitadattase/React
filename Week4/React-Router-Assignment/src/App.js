import React from 'react';
// import logo from './logo.svg';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import './App.css';
import Home from './components/home';
import Posts from './components/posts';
import Products from './components/products';

import ProductDetails from './components/productDetails';

import NotFound from './components/notFound';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" render={props => <Products pizza="foo" {...props} />} />
          <Route path="/posts/:year?/:month?" component={Posts} />
          <Redirect from="/messages" to="/posts" />
          <Route path="/" exact component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
