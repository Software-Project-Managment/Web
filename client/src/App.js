import React from "react";
import "./App.css";
import PreLoginPage from "./components/PreLoginPage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DownloadInt from "./components/Student/DownloadInt";
import UploadInt from "./components/Student/UploadInt";
import UploadTranscript from "./components/Student/UploadTranscript";
import Message from "./components/Student/Message";
import Notification from "./components/Student/Notification";
import Profile from "./components/Student/Profile";
import CoordinatorPage from "./components/Coordinator/CoordinatorPage";
import CoordinatorLoginPage from "./components/CoordinatorLoginPage";
import StudentsForms from "./components/Coordinator/StudentsForms";
import CoordinatorUploadInt from "./components/Coordinator/CoordinatorUploadInt";
import ViewTranscript from "./components/Coordinator/ViewTranscript";
import CoordinatorMessage from "./components/Coordinator/CoordinatorMessage";
import CoordinatorNotification from "./components/Coordinator/CoordinatorNotification";
import CoordinatorProfile from "./components/Coordinator/CoordinatorProfile";
import UpperMessage from "./components/Student/UpperMessage";
import CareerPage from "./components/CareerCenter/CareerPage";
import CareerCenterLoginPage from "./components/CareerCenterLoginPage";
import ApprovedForms from "./components/CareerCenter/ApprovedForms";
import IncomingMessage from "./components/Student/IncomingMessage";
import NewStudent from "./components/Student/NewStudent";
import NewInbox from "./components/Student/NewInbox";
import NewUploaded from "./components/Student/NewUploaded";
import IntershipApplicationForm from "./components/Student/IntershipApplicationForm";
import IntershipReportTemplate from "./components/Student/IntershipReportTemplate.js";
import NewUploadTranscript from "./components/Student/NewUploadTranscript";
import SgkDocument from "./components/Student/SgkDocument";
import UploadedDocuments from "./components/Student/UploadedDocument";
import NewCoordinator from "./components/Coordinator/NewCoordinator";
import StudentInformation from "./components/Coordinator/StudentInformation";

function App() {
  //const [showLoginPage, setShowLoginPage] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PreLoginPage />} />
          <Route
            path="/login/student"
            element={
              <LoginPage
                type={"student"}
                FirstInput={"Student ID or Email:"}
                entry={"Student Entry"}
              />
            }
          />
          <Route
            path="/login/coordinator"
            element={
              <CoordinatorLoginPage
                type={"coordinator"}
                FirstInput={"Username:"}
                entry={"Coordinator Entry"}
              />
            }
          />
          <Route
            path="/login/career"
            element={
              <CareerCenterLoginPage
                type={"career"}
                FirstInput={"Username:"}
                entry={"Career Center Entry"}
              />
            }
          />
          <Route path="/student" element={<NewStudent />} />
          <Route path="/student/downint" element={<DownloadInt />} />
          <Route path="/student/upint" element={<UploadInt />} />
          <Route path="/student/uptranscript" element={<UploadTranscript />} />
          {/* <Route path="/student/inbox" element={<Inbox />} /> */}
          <Route path="/student/notifications" element={<Notification />} />
          <Route path="/student/message" element={<Message />} />
          <Route path="/student/uppermessage" element={<UpperMessage />} />
          <Route path="/student/incoming" element={<IncomingMessage />} />
          <Route path="/student/profile" element={<Profile />} />
          <Route path="/student/inbox" element={<NewInbox />} />
          <Route path="/student/uploaded" element={<NewUploaded />} />
          <Route path="/student/sgkDocument" element={<SgkDocument />} />
          <Route
            path="/student/uploadedDocuments"
            element={<UploadedDocuments />}
          />
          <Route
            path="/student/uploadTranscript"
            element={<NewUploadTranscript />}
          />
          <Route
            path="/student/intershipReportTemplate"
            element={<IntershipReportTemplate />}
          />
          <Route
            path="/student/intershipApplicationForm"
            element={<IntershipApplicationForm />}
          />
          <Route path="/coordinator" element={<NewCoordinator />} />
          <Route
            path="/coordinator/studentInformation"
            element={<StudentInformation />}
          />
          <Route
            path="/coordinator/studentsforms"
            element={<StudentsForms />}
          />
          <Route
            path="/coordinator/uploadform"
            element={<CoordinatorUploadInt />}
          />
          <Route
            path="/coordinator/viewtranscript"
            element={<ViewTranscript />}
          />
          <Route path="/coordinator/message" element={<CoordinatorMessage />} />
          <Route
            path="/coordinator/notifications"
            element={<CoordinatorNotification />}
          />
          <Route path="/coordinator/profile" element={<CoordinatorProfile />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/career/approvedforms" element={<ApprovedForms />} />
        </Routes>
      </Router>

      {/* {showLoginPage ? (
        <LoginPage newProp="value" />
      ) : (
        <PreLoginPage
          onStudentEntry={() => setShowLoginPage(true)}
          onCoordinatorEntry={() => setShowLoginPage(true)}
          onCareerCenterEntry={() => setShowLoginPage(true)}
          newProp="value"
        />
      )} */}
    </div>
  );
}

export default App;
