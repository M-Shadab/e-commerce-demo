import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import "./App.css";

const App = () => {
  return (
    <main className="Container">
      <Switch>
        <Route path="/:product/:id" component={Product} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
};

export default App;
