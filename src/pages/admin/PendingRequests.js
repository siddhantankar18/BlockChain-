import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import adminLayout from "../../hoc/adminLayout";

const PendingRequests = () => {
    // Sample data for demonstration
    const pendingRequests = [
        { id: 1, certificateType: "Course Duration", status: "Pending", fileUploaded: false },
        { id: 2, certificateType: "Date of Birth", status: "Pending", fileUploaded: false },
        { id: 3, certificateType: "Bonafide for Passport", status: "Pending", fileUploaded: false }
    ];

    // Ref for file input element
    const fileInputRef = useRef(null);
    // State to track which request has a file uploaded
    const [uploadedFileId, setUploadedFileId] = useState(null);

    const handleUpload = (id) => {
        // Trigger file input click
        fileInputRef.current.click();
        // Set the uploaded file id
        setUploadedFileId(id);
    };

    const handleFileChange = (event) => {
        // Get selected file
        const file = event.target.files[0];
        if (file) {
            // Handle file upload logic, e.g., send file to server
            console.log(`Uploading file: ${file.name}`);
            // Update the fileUploaded state for the corresponding request
            setUploadedFileId(null); // Reset uploadedFileId state after uploading
        }
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Pending Certificates</h1>
                <Link to="/dashboardinstitute" className="btn btn-primary">Back to Dashboard</Link>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Certificate Type</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render rows for pending certificates */}
                    {pendingRequests.map(request => (
                        <tr key={request.id}>
                            <td>{request.certificateType}</td>
                            <td>{request.status}</td>
                            <td>
                                {request.fileUploaded ? (
                                    <button className="btn btn-secondary">
                                        Send File
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => handleUpload(request.id)}
                                    >
                                        Upload File
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default adminLayout(PendingRequests);
