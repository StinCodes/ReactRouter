import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Red = (props) => {
  return (
    <div className="red">
      <h1>RED</h1>
    </div>
  );
};

const Blue = (props) => {
  return (
    <div className="blue">
      <h1>BLUE</h1>
    </div>
  );
};

const Main = (props) => {
  return (
    <BrowserRouter>
      <div id="container">
        <div id="navbar">
          <Link to = "/red">Go To Red</Link>
          <Link to = "/blue">Go To Blue</Link>
        </div>

        <div id="main-section">
            <Routes>
              <Route path="/blue" element={<Blue />} />
              <Route path="/red" element={<Red />} />
              <Route exact path = "/" element = {<Red />}/>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<Main />);
