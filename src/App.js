import React, { useEffect, useState } from "react";
import { AppContext } from "./Context";
import Test1 from "./Test1";

class App extends React.Component {
  render() {
    //props drilling
    return (
      <>
        <AppContext.Consumer>
          {(context) => {
            return <p>Hello.. - {context.name}</p>;
          }}
        </AppContext.Consumer>
        <AppContext.Provider value={{ name: "Karthik" }}>
          <Test1 />
        </AppContext.Provider>
        <Test1 />
      </>
    );
  }
}

export default App;
