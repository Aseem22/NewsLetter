import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 bg-dark text-light position-fixed z-3">
          <Navbar />
        </div>
      </div>

      <div className="row">
        <div
          className="col-md-2 bg-dark position-fixed z-2"
          style={{ margin: "55px 0px 0px 0px" }}
        >
          <Sidebar />
        </div>
        <div className="col-md-10 z-1" style={{ margin: "75px 0px 0px 250px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
