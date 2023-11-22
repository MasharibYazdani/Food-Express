import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const heading = <h1 id="heading">Masharib Yazdani</h1>;

const App = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
