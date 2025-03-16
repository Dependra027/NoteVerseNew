import { useEffect, useState } from 'react';
import "./index.css"
import 'font-awesome/css/font-awesome.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import SchoolNotes from './components/SchoolNotes';
import CollegeNotes from './components/CollegeNotes';
import CompetitionNotes from './components/Competition';
import LoginPopup from './components/LoginPopup';
import UploadNotePage from './components/UploadNotePage';
import TenthGradeNotes from './pages/TenthGradeNotes';
import EleventhGradeNotes from './pages/EleventhGradeNotes';
import TwelfthGradeNotes from './pages/TwelfthGradeNotes';
import CollegePage from './pages/CollegePage';
import { getDownloadURL,ref } from 'firebase/storage';
import Footer from './components/footer';
import Semfirst from './college/sem1';


import About from './pages/About';
import Privacy from './pages/Privacy';
import Feedback from './pages/FeedBack';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVGmLXPqP3mM4n_5-kaeHpPKH0zZKpySQ",
  authDomain: "notesweb-60b36.firebaseapp.com",
  projectId: "notesweb-60b36",
  storageBucket: "notesweb-60b36.appspot.com",
  messagingSenderId: "273862683776",
  appId: "1:273862683776:web:4ee431f0ab31188917ca65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [username, setUsername] = useState('');
  
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Persistent login check with Firebase
  useEffect(() => {
    // Check for Firebase auth state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUsername(user.email);
        localStorage.setItem('username', user.email);
        localStorage.setItem('isLoggedIn', 'true'); // Track login state
      } else {
        setIsLoggedIn(false);
        setUsername('');
        localStorage.removeItem('username');
        localStorage.removeItem('isLoggedIn');
      }
    });

    // Show login popup after 5 seconds if not logged in
    const timer = setTimeout(() => {
      if (!isLoggedIn) {
        setShowLoginPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [isLoggedIn]); // Run this effect whenever isLoggedIn changes

  const handleLogout = () => {
    auth.signOut();
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        username={username} 
        setShowLoginPopup={setShowLoginPopup} 
        handleLogout={handleLogout}
      />
      
      {showLoginPopup && (
        <LoginPopup 
          onClose={() => setShowLoginPopup(false)} 
          setIsLoggedIn={setIsLoggedIn} 
          setUsername={setUsername} 
        />
      )}

      <main style={{ padding: '20px', color: '#fff' }}>
        <Routes>
          <Route path="/" element={
            <>
              <div style={{ padding: '20px', color: '#fff' }} data-aos="fade-up">
                <h1>Welcome User!</h1>
                <p>"Your Gateway to Smarter Learning – Notes for Every Step of Your Journey!"</p>
              </div>
              <div data-aos="fade-up">
                <Hero />
              </div>
              <div data-aos="fade-right">
                <SchoolNotes />
              </div>
              <div data-aos="fade-up">
                <CollegeNotes />
              </div>
              <div data-aos="zoom-in">
                <CompetitionNotes />
              </div>
            </>
          } />
          <Route path="/10th" element={<TenthGradeNotes />} />
          <Route path="/11th" element={<EleventhGradeNotes />} />
          <Route path="/12th" element={<TwelfthGradeNotes />} />
          <Route path="/upload" element={<UploadNotePage />} />
          <Route path="/Engineering" element={<CollegePage />} />

          <Route path="/About" element={<About/>}/>
          <Route path="/Privacy" element={<Privacy/>}/>
          <Route path="/Feedback" element={<Feedback/>}/>
          <Route path="/semfirst" element={<Semfirst/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
    

  );
}

export default App;
