import React, { useState } from "react"; // Import React and useState
import "font-awesome/css/font-awesome.min.css";
import "./assets/css/app.css";
import DashboardPage from "./pages/DashboardPage";
import TypographyPage from "./pages/TypographyPage";
import LoginPage from "./pages/auth/LoginPage";
import ResetPassword from "./pages/auth/ResetPassword";
import ProfilePage from "./pages/profile/ProfilePage";
import ChangePasswordPage from "./pages/profile/ChangePasswordPage";
import UserPreferencesPage from "./pages/profile/UserPreferencesPage";
import SignupPage from "./pages/auth/SignupPage";
import AdminBlankPage from "./pages/AdminBlankPage";
import ApprovedPage from "./pages/ApprovedPage";
import RejectedPage from "./pages/RejectedPage";
import PendingPage from "./pages/PendingPage";
import UploadPage from "./pages/UploadPage"; // Import UploadPage
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./common/sidebar"; // Import Sidebar component

function App() {
  const [email, setEmail] = useState("");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage setEmail={setEmail} />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route
          exact
          path="/login"
          element={<LoginPage setEmail={setEmail} />}
        />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/change-password" element={<ChangePasswordPage />} />
        <Route exact path="/preferences" element={<UserPreferencesPage />} />
        <Route exact path="/typography" element={<TypographyPage />} />
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
