
import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.json";
import { FaRocketchat, FaRegNewspaper } from "react-icons/fa";
import { BsColumns } from "react-icons/bs";
import { IoPersonOutline,IoPeople,IoSpeedometerOutline   } from "react-icons/io5";
import { CiPower } from "react-icons/ci";





const Dashboard = () => {
  const navigation = useNavigate();
  // axios.defaults.withCredentials=true
  const handelLogout = () => {
    axios.get("http://localhost:5000/auth/logout").then((result) => {
      if (result.data.Status) {
        navigation("/adminlogin");
      }
    });
  };
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                Admin Dashboard
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <IoSpeedometerOutline />
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/students"
                  className="nav-link px-0 align-middle text-white"
                >
                  <IoPeople />
                  <span className="ms-2 d-none d-sm-inline">
                    Manage Students
                  </span>
                </Link>
                <Link
                  to="/dashboard/chat"
                  className="nav-link px-0 align-middle text-white"
                >
                  <FaRocketchat />
                  <span className="ms-2 d-none d-sm-inline">Chat</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/category"
                  className="nav-link px-0 align-middle text-white"
                >
                  <BsColumns />
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </Link>
                <Link
                  to="/dashboard/newsweek"
                  className="nav-link px-0 align-middle text-white"
                >
               <FaRegNewspaper />
                  <span className="ms-2 d-none d-sm-inline">News Week</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                <IoPersonOutline />
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100" onClick={handelLogout}>
                <Link className="nav-link px-0 align-middle text-white">
                <CiPower />
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Student communicate system</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
