import React from "react";
import ReactDOM from "react-dom/client";
import Header from './src/components/Header';
import Body from './src/components/Body';

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6161112&lng=77.3905778&collection=83633&tags&sortBy=&filters=&type=rcv2&offset=0&page_type=null


// const heading = React.createElement("h1", {}, "React Food Ordering App");





const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
