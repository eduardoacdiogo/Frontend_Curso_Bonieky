import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Config from "./Config";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename={Config.BASE_URL}>
        <div>
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/sobre" component={Sobre} />
        </div>
      </BrowserRouter>
    );
  }
}
