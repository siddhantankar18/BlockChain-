// DashboardPage.js
import React from "react";
import { Link } from "react-router-dom";
import adminLayout from "../../hoc/adminLayout";

class DashboardPage extends React.Component {
  render() {
    return (
      <>
        <div className="row mt-30" style={{ paddingTop: "25px" }}>
          {/* Card for sending requests */}
          <div className="col-xl-6 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-list"></i>
                </div>
                <div className="mr-5">Send Request for Certificate...</div>
              </div>
              <Link
                to="/sendrequest"
                className="card-footer text-white clearfix small z-1"
              >
                <span className="float-left">Send Request</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </Link>
            </div>
          </div>

          {/* Card for viewing status */}
          <div className="col-xl-6 col-sm-6 mb-3">
            <div className="card text-white bg-info o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-info"></i>
                </div>
                <div className="mr-5">View Status of Sent Requests</div>
              </div>
              <Link
                to="/viewstatus"
                className="card-footer text-white clearfix small z-1"
              >
                <span className="float-left">View Status</span>
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
