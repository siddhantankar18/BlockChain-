import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom
import adminLayout from "../hoc/adminLayout";

const UploadPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile) {
            const randomCode = Math.floor(Math.random() * 1000000);
            // Pass filename and code as state when navigating to PendingPage
            navigate("/pending", { state: { fileName: selectedFile.name, code: randomCode } });
        } else {
            console.log("No file selected.");
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Upload Documents</h1>
                <Link to="/dashboard" className="btn btn-primary">Back to Dashboard</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fileInput" className="form-label">Choose file:</label>
                    <input
                        type="file"
                        className="form-control"
                        id="fileInput"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
        </div>
    );
};

export default adminLayout(UploadPage);
