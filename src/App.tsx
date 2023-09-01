import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


import Home from "./components/Home";


const Component1 = () => {
  return <div className="container">
    <div className="row">
      
      <div className="col-sm-12">
       <Home/>
      </div>
    </div>
  </div>
};

const Component2 = () => {
  return <h1>Component 2</h1>;
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Component1 /> },
    { path: "component2", element: <Component2 /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;