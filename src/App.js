import './App.css';
// import StudentProfile from './components/StudentProfile/StudentProfile.component';
// import image from './img/BPDF_Happy.png';
import Header from './components/Common/Header.component.jsx';
import Footer from './components/Common/Footer.component.jsx';

import ProgramsPageMain from './components/ProgramsPage/ProgramsPageMain.component.jsx';

import SignUpPage from './components/SignUpPage/SignUpPage.component.jsx';

import ProfileDiv from './components/Profile/ProfileDiv.component.jsx';

import AdminAddCourses from './components/AdminPage/AdminAddCourses.component.jsx';
import AdminDashboard from './components/AdminPage/AdminDashboard.component.jsx';


import LogInPage from './components/LogInPage/LogInPage.component.jsx';
import ContactPage from './components/ContactPage/ContactPage.component.jsx';
// <AdminDashboard name="MyNameVariableHere" status="MyStatusAdminHere"/>

//   <ProfileDiv firstName="Tiny" lastName="Teen" id="2532" email="tiny@gmail.com" phone="125-124-2312" birthday="2007-01-01" department="Software Development" program="Diploma" userName="TinyT"/>

function App() {

  return (
    <div className="mainContent">

      <Header title="Contact Page"></Header>
      
      <ContactPage />


      <Footer></Footer>

    </div>
  );
}

/*


<SignUpPage />
<ProgramSearch />
<ProgramDiv programTitle="Certificate" term="Fall" startDate="2024-09-03" endDate="2024-12-20" length="6 months" description="this certificate programs offers a fast track into the world of software development." fee="80,000" code="445"/>


*/

export default App;