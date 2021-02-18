import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";



export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Parent-Hello-page</Link>
          </li>
          <li>
            <Link to="/Child1">Child-Hello-Page-1</Link>
          </li>
          <li>
            <Link to="/Child2">Child-Hello-Page-2</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Child1">
            <Child1 />
          </Route>
          <Route path="/Child2">
            <Child2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>WELCOME HOME :) </h2>
    </div>
  );
}

function Child1() {

  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Hi! I AM CHILD 1!!</h2>
     
    </div>
  );
}

function Child2() {
 
    let { path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>HI! I AM CHILD 2!!</h2>
       
      </div>
    );
  }
