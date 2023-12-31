import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="container-fluid pt-5">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-8 d-none d-sm-inline text-secondary  text-start">
                <u>Catagories:</u>
              </span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <NavLink
                  to="business"
                  className={() => {
                    "nav-link align-middle px-0";
                  }}
                >
                  <i className="fs-4 bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline">Business</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="entertainment"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-table"></i>
                  <span className="ms-1 d-none d-sm-inline">Entertainment</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="health" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table"></i>
                  <span className="ms-1 d-none d-sm-inline">Health</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="science" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table"></i>
                  <span className="ms-1 d-none d-sm-inline">Science</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="sports" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people"></i>
                  <span className="ms-1 d-none d-sm-inline">Sports</span>
                </NavLink>
              </li>
              <li className="mt-5">
                <div className=" dropdown ">
                  <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="hugenerd"
                      width="30"
                      height="30"
                      className="rounded-circle"
                    />
                    <span className="d-none d-sm-inline mx-1">User</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li>
                      <a className="dropdown-item" href="#">
                        New project...
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        {/* <div className="col py-3">Content area...</div> */}
      </div>
    </div>
  );
}

export default Sidebar;
