import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./assets/css/app.css";
import DashboardPage from "./pages/student/DashboardPage";
import LoginPage from "./pages/auth/LoginPage";
import ResetPassword from "./pages/auth/ResetPassword";
import SignupPage from "./pages/auth/SignupPage";
import AdminBlankPage from "./pages/AdminBlankPage";
import ApprovedPage from "./pages/ApprovedPage";
import RejectedPage from "./pages/RejectedPage";
import PendingPage from "./pages/PendingPage";
import UploadPage from "./pages/admin/UploadPage"; // Import UploadPage
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./common/sidebar"; // Import Sidebar component
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import SendRequest from "./pages/student/SendRequest";
import ViewStatus from "./pages/student/ViewStatus";
import PendingRequests from "./pages/admin/PendingRequests";
import OldRecords from "./pages/admin/OldRecords";

function App() {
  const [email, setEmail] = useState("");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage setEmail={setEmail} />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/dashboardinstitute" element={<DashboardAdmin />} />
        <Route exact path="/sendrequest" element={<SendRequest />} />
        <Route exact path="/viewstatus" element={<ViewStatus />} />
        <Route exact path="/oldrecords" element={<OldRecords />} />
        <Route exact path="/pendingrequests" element={<PendingRequests />} />
        <Route
          exact
          path="/login"
          element={<LoginPage setEmail={setEmail} />}
        />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/blank-page" element={<AdminBlankPage />} />
        <Route exact path="/approved" element={<ApprovedPage />} />
        <Route exact path="/rejected" element={<RejectedPage />} />
        <Route exact path="/pending" element={<PendingPage />} />
        <Route exact path="/upload" element={<UploadPage />} /> // Add UploadPage route
      </Routes>
    </Router>
  );
}

export default App;
