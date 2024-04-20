import React from "react";
import { useNavigate, Link } from "react-router-dom";
import adminLayout from "../../hoc/adminLayout";

const ViewStatus = () => {
    // Sample data for demonstration
    const requests = [
        { id: 1, certificateType: "Course Duration", code: "ABC123", status: "Approved" },
        { id: 2, certificateType: "Date of Birth", code: "DEF456", status: "Pending" },
        { id: 3, certificateType: "Bonafide for Passport", code: "GHI789", status: "Rejected" }
    ];

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
            <h1>View Status of Sent Requests</h1>
                <Link to="/dashboard" className="btn btn-primary">Back to Dashboard</Link>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Certificate Type</th>
                            <th>Code</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map(request => (
                            <tr key={request.id}>
                                <td>{request.certificateType}</td>
                                <td>{request.code}</td>
                                <td>{request.status}</td>
                                <td>
                                    {request.status === "Approved" && (
                                        <a href={`http://example.com/download/${request.code}`} className="btn btn-primary btn-sm">Download</a>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default adminLayout(ViewStatus);
