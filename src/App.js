import './App.css';
// import StudentProfile from './components/StudentProfile/StudentProfile.component';
// import image from './img/BPDF_Happy.png';
import Header from './components/Common/Header.component.jsx';
import Footer from './components/Common/Footer.component.jsx';

import ProgramDiv from './components/ProgramsPage/ProgramDiv.component.jsx';
import ProgramSearch from './components/ProgramsPage/ProgramSearch.component.jsx';

import SignUpPage from './components/SignUpPage/SignUpPage.component.jsx';


function App() {

  return (
    <div className="mainContent">

      <Header title="Home"></Header>
      <SignUpPage />
      
      <Footer></Footer>

    </div>
  );
}

/*

<ProgramSearch />
<ProgramDiv programTitle="Certificate" term="Fall" startDate="2024-09-03" endDate="2024-12-20" length="6 months" description="this certificate programs offers a fast track into the world of software development." fee="80,000" code="445"/>


*/

export default App;