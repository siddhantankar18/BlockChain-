import React from "react";
import { Link } from "react-router-dom"; // Import Link
import adminLayout from "../../hoc/adminLayout";

const OldRecords = () => {
    // Sample data for demonstration
    const oldRecords = [
        { id: 1, certificateType: "Course Duration", code: "ABC123", status: "Approved" },
        { id: 2, certificateType: "Date of Birth", code: "DEF456", status: "Approved" },
        { id: 3, certificateType: "Bonafide for Passport", code: "GHI789", status: "Rejected" }
    ];

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Old Records</h1>
                <Link to="/dashboardinstitute" className="btn btn-primary">Back to Dashboard</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Certificate Type</th>
                        <th scope="col">Code</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {oldRecords.map(record => (
                        <tr key={record.id}>
                            <td>{record.certificateType}</td>
                            <td>{record.code}</td>
                            <td>{record.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default adminLayout(OldRecords);
