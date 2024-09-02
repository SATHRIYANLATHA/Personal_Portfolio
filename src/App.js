import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import TechnicalExposure from './components/TechnicalExposure.js';
import Education from './components/Education.js';
import Project from './components/Project.js';
import Achievements from './components/Achievements.js';
import PersonalProfile from './components/PersonalProfile.js';
import Others from './components/Others.js';


function App() {



  return (
    <BrowserRouter>
    <ul >
      <li><Link to="/" className='link'>ABOUT ME</Link></li>
      <li><Link to="/technicalexposure" className='link'>TECHNICAL EXPOSURE</Link></li>
      <li><Link to="/education" className='link'>EDUCATION</Link></li>
      <li><Link to="/projects" className='link'>PROJECTS</Link></li>
      <li><Link to="/achievements" className='link'>ACHIEVEMENTS</Link></li>
      <li><Link to="/personalprofile" className='link'>PERSONAL PROFILE</Link></li>
      <li><Link to="/Others" className='link'>OTHERS</Link></li>
    </ul>

    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/technicalexposure" element={<TechnicalExposure/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/achievements" element={<Achievements/>}/>
      <Route path="/personalprofile" element={<PersonalProfile/>}/>
      <Route path="/others" element={<Others/>}/>
    </Routes>





    </BrowserRouter>

    


   
  );
}

export default App;
