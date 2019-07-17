import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import EventDetails from "./widget/Events/EventDetails";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/event/:id" component={EventDetails} />
      </Switch>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
