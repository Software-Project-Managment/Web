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
import NewIncomingMessage from "./components/Student/NewIncomingMessage";
import NewOutgoingMessage from "./components/Student/NewOutgoingMessage";
import CoordinatorInbox from "./components/Coordinator/CoordinatorInbox";
import NewStudentInformation from "./components/Coordinator/NewStudentInformation";
import CoordinatorincomingMessage from "./components/Coordinator/CoordinatorincomingMessage";
import Coordinatoroutgoingmessage from "./components/Coordinator/Coordinatoroutgoingmessage";
import NewStudentInformation1 from "./components/Coordinator/NewStudentInformation1";
import CareerInbox from "./components/CareerCenter/CareerInbox";
import CareerIncomingmessage from "./components/CareerCenter/CareerIncomingmessage";
import CareerOutgoingmessage from "./components/CareerCenter/CareerOutgoingmessage";
import CareerStudent from "./components/CareerCenter/CareerStudent";
import AdminLoginPage from "./components/AdminLoginPage";
import CareerStudentInformation from "./components/CareerCenter/CareerStudentInformation";
import CareerViewSgkDocument from "./components/CareerCenter/CareerViewSgkDocument";
import CareerIntershipApplicationForm from "./components/CareerCenter/CareerIntershipApplicationForm";
import CareerSendSgkDocument from "./components/CareerCenter/CareerSendSgkDocument";
import AdminHomepage from "./components/Admin/AdminHomepage";
import AdminCreate from "./components/Admin/AdminCreate";
import AdminStudents from "./components/Admin/AdminStudents";
import AdminCoordinators from "./components/Admin/AdminCoordinators";
import AdminPreAddCoordinator from "./components/Admin/AdminPreAddCordinator";
import AdminAddCoordinator from "./components/Admin/AdminAdddCoordinator";
import AdminStudentInformation from "./components/Admin/AdminStudentInformation";

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

          <Route
            path="/login/admin"
            element={
              <AdminLoginPage
                type={"admin"}
                FirstInput={"Username:"}
                entry={"Admin Entry"}
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
          <Route path="/student/newMessage" element={<NewInbox />} />

          <Route
            path="/student/outgoingMessage"
            element={<NewOutgoingMessage />}
          />
          <Route
            path="/student/incomingMessage"
            element={<NewIncomingMessage />}
          />
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
            path="/coordinator/CoordinatorInbox"
            element={<CoordinatorInbox />}
          />
          <Route
            path="/coordinator/NewStudentInformation"
            element={<NewStudentInformation />}
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
            path="/coordinator/NewStudentInformation1"
            element={<NewStudentInformation1 />}
          />

          <Route
            path="/coordinator/incomingMessage"
            element={<CoordinatorincomingMessage />}
          />
          <Route
            path="/coordinator/outgoingMessage"
            element={<Coordinatoroutgoingmessage />}
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
          <Route path="/career/CareerInbox" element={<CareerInbox />} />
          <Route
            path="/career/CareerIncomingmessage"
            element={<CareerIncomingmessage />}
          />
          <Route
            path="/career/CareerOutgoingmessage"
            element={<CareerOutgoingmessage />}
          />
          <Route path="/career/CareerStudent" element={<CareerStudent />} />
          <Route path="/career/approvedforms" element={<ApprovedForms />} />
          <Route
            path="/career/studentInformation"
            element={<CareerStudentInformation />}
          />
          <Route
            path="/career/viewSgkDocument"
            element={<CareerViewSgkDocument />}
          />
          <Route
            path="/career/intershipApplicationForm"
            element={<CareerIntershipApplicationForm />}
          />
          <Route
            path="/career/sendSgkDocument"
            element={<CareerSendSgkDocument />}
          />

          <Route path="/admin" element={<AdminHomepage />} />
          <Route path="/admin/admincreate" element={<AdminCreate />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          <Route path="/admin/coordinators" element={<AdminCoordinators />} />
          <Route
            path="/admin/preAddCoordinator"
            element={<AdminPreAddCoordinator />}
          />
          <Route
            path="/admin/addCoordinator"
            element={<AdminAddCoordinator />}
          />
          <Route path="admin/AdminStudentInformation" element={<AdminStudentInformation/>}/>
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
