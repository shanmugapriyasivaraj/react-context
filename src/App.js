import React, { useEffect, useState } from "react";

import withBorder from "./WithBorder";
import withProfile from "./WithProfile";

class App extends React.Component {
  render() {
    console.log(this.props);
    return <p>Hello..!</p>;
  }
}

export default withProfile(App);
