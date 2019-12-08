import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { One, Two, Three, Four } from './Components';
import { LayoutOne, LayoutTwo } from './Layouts';

function App() {
  return (
    <BrowserRouter>
      <h3>Content of main App component</h3>
      <ul>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
        <li><Link to="/three">Three</Link></li>
        <li><Link to="/four">Four</Link></li>
      </ul>

      <Switch>
        <RouteWrapper path="/one" component={One} layout={LayoutOne} />
        <RouteWrapper path="/two" component={Two} layout={LayoutOne} />
        <RouteWrapper path="/three" component={Three} layout={LayoutTwo} />
        <RouteWrapper path="/four" component={Four} layout={LayoutTwo} />
      </Switch>
    </BrowserRouter>
  );
}

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

function RouteWrapperTwo() {

}

render(<App />, document.getElementById('root'));
