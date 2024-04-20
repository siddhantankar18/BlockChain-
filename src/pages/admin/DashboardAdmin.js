import React from "react";
import { Link } from "react-router-dom";
import adminLayout from "../../hoc/adminLayout";

class DashboardAdmin extends React.Component {
  render() {
    return (
      <>
        <div className="row mt-30" style={{ paddingTop: "25px" }}>
          {/* Pending Requests Section */}
          <div className="col-xl-6 mb-3">
            <div className="card text-white bg-warning o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-list"></i>
                </div>
                <div className="mr-5">Pending Requests for Certificates</div>
              </div>
              <Link
                to="/pendingrequests"
                className="card-footer text-white clearfix small z-1"
              >
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </Link>
            </div>
          </div>

          {/* Old Records Section */}
          <div className="col-xl-6 mb-3">
            <div className="card text-white bg-info o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-list"></i>
                </div>
                <div className="mr-5">Old Records</div>
              </div>
              <Link
                to="/oldrecords"
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

        {/* Render Pending Requests component */}
      </>
    );
  }
}

export default adminLayout(DashboardAdmin);
