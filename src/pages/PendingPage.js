import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import adminLayout from "../hoc/adminLayout";

const PendingPage = () => {
    const location = useLocation(); // Use useLocation hook to get location object
    const fileName = location.state ? location.state.fileName : null; // Check if location.state exists

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Pending Certificates</h1>
                <Link to="/dashboard" className="btn btn-primary">Back to Dashboard</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Certificate Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Code</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render rows for pending certificates */}
                    <tr>
                        <td>{fileName}</td>
                        <td>Pending</td>
                        <td>123456</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default adminLayout(PendingPage);
