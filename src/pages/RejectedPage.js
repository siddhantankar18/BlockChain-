import React from "react";
import { Link } from "react-router-dom"; // Import Link
import adminLayout from "../hoc/adminLayout";

class RejectedPage extends React.Component {
    render(){
        return (
            <>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1>Rejected Certificates</h1>
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
                        {/* Add rows for rejected certificates here */}
                        <tr>
                            <td>Certificate 1</td>
                            <td>Rejected</td>
                            <td>123456</td>
                        </tr>
                        <tr>
                            <td>Certificate 2</td>
                            <td>Rejected</td>
                            <td>789012</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default adminLayout(RejectedPage);
