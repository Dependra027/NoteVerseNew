import { useEffect, useState } from 'react';
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import ScrollToTop from "./ScrollToTop";

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
import Footer from './components/Footer';
import Semfirst from './college/sem1';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Feedback from './pages/FeedBack';

// 🔮 Pattern animation background
import Pattern from './components/Pattern';

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

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUsername(user.email);
        localStorage.setItem('username', user.email);
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        setIsLoggedIn(false);
        setUsername('');
        localStorage.removeItem('username');
        localStorage.removeItem('isLoggedIn');
      }
    });

    const timer = setTimeout(() => {
      if (!isLoggedIn) {
        setShowLoginPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const handleLogout = () => {
    auth.signOut();
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <ScrollToTop />

      {/* 🌀 Background Animation */}
      <Pattern />

      {/* 🔗 Navbar */}
      <Navbar
        isLoggedIn={isLoggedIn}
        username={username}
        setShowLoginPopup={setShowLoginPopup}
        handleLogout={handleLogout}
      />

      {/* 🔒 Login Popup */}
      {showLoginPopup && (
        <LoginPopup
          onClose={() => setShowLoginPopup(false)}
          setIsLoggedIn={setIsLoggedIn}
          setUsername={setUsername}
        />
      )}

      {/* 🧠 Main Content */}
      <main style={{ padding: '20px', color: '#fff', position: 'relative', zIndex: 1, marginTop: '60px' }}>
        <Routes>
          <Route path="/" element={
            <>
              <div data-aos="fade-up">
                <h1 id="welcome">Welcome User!</h1>
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
          <Route path="/About" element={<About />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/semfirst" element={<Semfirst />} />
        </Routes>
      </main>

      {/* 📦 Footer */}
      <Footer />
    </Router>
  );
}

export default App;
