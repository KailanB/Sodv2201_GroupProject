import { Route, Routes } from "react-router-dom";
import './App.css';
// import StudentProfile from './components/StudentProfile/StudentProfile.component';
// import image from './img/BPDF_Happy.png';
// import Header from './components/Common/Header.component.jsx';
// import Footer from './components/Common/Footer.component.jsx';





// import ContactPage from './components/ContactPage/ContactPage.component.jsx';
// <AdminDashboard name="MyNameVariableHere" status="MyStatusAdminHere"/>

import Home from './routes/Home/Home';
import View from "./view/View";
import ContactPage from "./routes/ContactPage/ContactPage.component";
import ProgramsPageMain from './routes/ProgramsPage/ProgramsPageMain.component.jsx';

import LogInPage from './routes/LogInPage/LogInPage.component.jsx';
import SignUpPage from './routes/SignUpPage/SignUpPage.component.jsx';

import ProfilePage from './routes/Profile/ProfilePage.component.jsx';

import AdminAddCourses from './routes/AdminAddCourses/AdminAddCourses.component.jsx';
import AdminEditCourses from './routes/AdminEditCourses/AdminEditCourses.component.jsx';
import AdminDashboard from './routes/AdminDashboard/AdminDashboard.component.jsx';
import AdminMessagesPage from './routes/AdminMessages/AdminMessagesPage.component.jsx';
import ViewRegisteredStudents from './routes/ViewRegisteredStudents/ViewRegisteredStudents.component.jsx';
import CoursesPage from "./routes/CoursesPageNew/CoursesPage.component.jsx";






function App() {

  return (

    <div>
      <Routes>
        <Route element={<View />}>
        
          {/* Paths here */}
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/programsPage" element={<ProgramsPageMain />} />

          <Route path="/logInPage" element={<LogInPage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />

          <Route path="/profilePage" element={<ProfilePage />} />


          <Route path="/adminAddCourses" element={<AdminAddCourses />} />
          <Route path="/coursesPage" element={<CoursesPage />} />
          <Route path="/adminEditCourses" element={<AdminEditCourses />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/adminMessagesPage" element={<AdminMessagesPage />} />
          <Route path="/viewRegisteredStudents" element={<ViewRegisteredStudents />} />


        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
/*

<div className="mainContent">

      <Header title="Contact Page"></Header>
      
      <ContactPage />


      <Footer></Footer>

    </div>

*/


/*


<SignUpPage />
<ProgramSearch />
<ProgramDiv programTitle="Certificate" term="Fall" startDate="2024-09-03" endDate="2024-12-20" length="6 months" description="this certificate programs offers a fast track into the world of software development." fee="80,000" code="445"/>


*/

