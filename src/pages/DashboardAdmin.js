import React from "react";
import { Link } from "react-router-dom";
import adminLayout from "../hoc/adminLayout";

class DashboardPage extends React.Component {
  render() {
    return (
      <>
        <div className="row mt-30" style={{ paddingTop: "25px" }}>
          
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-success o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-list"></i>
                </div>
                <div className="mr-5">Approved.</div>
              </div>
              <Link
                to="/approved"
                className="card-footer text-white clearfix small z-1"
              >
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-warning o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-list"></i>
                </div>
                <div className="mr-5">Pending!</div>
              </div>
              <Link
                to="/pending"
                className="card-footer text-white clearfix small z-1"
              >
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-danger o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-list"></i>
                </div>
                <div className="mr-5">Rejected.</div>
              </div>
              <Link
                to="/rejected"
                className="card-footer text-white clearfix small z-1"
              >
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default adminLayout(DashboardPage);
