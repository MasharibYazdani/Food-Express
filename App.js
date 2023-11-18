import React from "react";
import ReactDOM from "react-dom/client";

// const heading = <h1 id="heading">Masharib Yazdani</h1>;

const Heading = () => <h1>Masharib Yazdani</h1>;

const HeadingFunct = () => (
  <div>
    <Heading />
    <h1>Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingFunct />);
