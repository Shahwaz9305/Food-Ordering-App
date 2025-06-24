import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "React Food Ordering App");
const Title = () => {
  return <h1>React Food Ordering App using jsx</h1>;
};
const FunctionalComponent = () => {
  return (
    <div>
      <Title />
      <h1>Functional Component.............</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent/>);
