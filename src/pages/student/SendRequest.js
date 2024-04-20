import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import adminLayout from "../../hoc/adminLayout";

const SendRequest = ({ addCertificateToPending }) => {
    const [certificateType, setCertificateType] = useState("");
    const [reason, setReason] = useState("");
    const navigate = useNavigate();

    const handleCertificateTypeChange = (event) => {
        setCertificateType(event.target.value);
    };

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (certificateType && reason) {
            // Add the certificate to pending requests
            addCertificateToPending(certificateType);
            // Assuming successful submission, navigate to the pending requests page
            navigate("/pending");
        } else {
            console.log("Please select certificate type and enter reason.");
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Send Certificate Request</h1>
                <Link to="/dashboard" className="btn btn-primary">Back to Dashboard</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="certificateType" className="form-label">Select Certificate Type:</label>
                    <select
                        className="form-control"
                        id="certificateType"
                        value={certificateType}
                        onChange={handleCertificateTypeChange}
                    >
                        <option value="">Select Certificate Type</option>
                        <option value="Course Duration">Certificate of Course Duration</option>
                        <option value="Date of Birth">Date of Birth and Place of Birth Certificate</option>
                        <option value="Bonafide for Passport">Bonafide for Passport</option>
                        <option value="Character Certificate">Character Certificate</option>
                        <option value="Document Retention">Document Retention Certificate</option>
                        <option value="Duplicate TC">Duplicate TC in Case of Missing</option>
                        <option value="Regular Bonafide">Regular Bonafide Certificate</option>
                        <option value="Transference Certificate">Transference Certificate</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="reason" className="form-label">Reason for Request:</label>
                    <textarea
                        className="form-control"
                        id="reason"
                        rows="3"
                        value={reason}
                        onChange={handleReasonChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Request Certificate</button>
            </form>
        </div>
    );
};

export default adminLayout(SendRequest);
