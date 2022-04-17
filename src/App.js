import React, { useEffect, useState } from "react";
import withBorder from "./WithBorder";

class App extends React.Component {
  render() {
    return <p>Hello..!</p>;
  }
}

export default withBorder(App);
