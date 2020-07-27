import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <p>Página home...</p>

        <Link to="/sobre">Ir para a página sobre</Link>
      </div>
    );
  }
}
