import * as React from "react";
import "./App.css";
import ContProvider from "./AppContext";

const logo = require("./logo.svg");

const PostInfo = ({ name }) => {
  return <div>{name}</div>;
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ContProvider>
          <PostInfo />
        </ContProvider>
      </div>
    );
  }
}

export default App;
