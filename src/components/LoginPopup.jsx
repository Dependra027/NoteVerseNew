// LoginPopup.js
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import styled from 'styled-components';
import './LoginPopup.css';

const firebaseConfig = {
  apiKey: "AIzaSyBVGmLXPqP3mM4n_5-kaeHpPKH0zZKpySQ",
  authDomain: "notesweb-60b36.firebaseapp.com",
  projectId: "notesweb-60b36",
  storageBucket: "notesweb-60b36.appspot.com",
  messagingSenderId: "273862683776",
  appId: "1:273862683776:web:4ee431f0ab31188917ca65"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const LoginPopup = ({ onClose, setIsLoggedIn, setUsername }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsernameState] = useState('');
  const [password, setPassword] = useState('');
  const [rewritePassword, setRewritePassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const hasShownLoginPopup = localStorage.getItem('hasShownLoginPopup');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn && !hasShownLoginPopup) {
      const timer = setTimeout(() => {
        setIsRegistering(false);
        localStorage.setItem('hasShownLoginPopup', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      setIsLoggedIn(true);
      setUsername(user.email);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', user.email);
      setMessage('Logged in successfully!');
      setTimeout(() => onClose(), 1000);
    } catch (error) {
      setMessage(`Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (password !== rewritePassword) {
      setMessage("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Registration successful! You can now log in.');
      setTimeout(() => setIsRegistering(false), 2000);
    } catch (error) {
      setMessage(`Registration failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setMessage('');

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setIsLoggedIn(true);
      setUsername(user.displayName || user.email);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', user.displayName || user.email);
      setMessage('Logged in successfully!');
      setTimeout(() => onClose(), 1000);
    } catch (error) {
      setMessage(`Google login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-wrapper" onClick={onClose}>
      <form className="form" onClick={(e) => e.stopPropagation()} onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div className="title">
          {isRegistering ? 'Register' : 'Login'}<br />
          <span>with your email</span>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="input"
          value={isRegistering ? email : username}
          onChange={(e) => isRegistering ? setEmail(e.target.value) : setUsernameState(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {isRegistering && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            value={rewritePassword}
            onChange={(e) => setRewritePassword(e.target.value)}
            required
          />
        )}

        <div className="login-with">
          <div className="button-log" onClick={handleGoogleLogin}>G</div>
        </div>

        <button className="button-confirm" type="submit" disabled={loading}>
          {loading ? 'Loading...' : (isRegistering ? "Register" : "Login")}
        </button>

        {message && <p className="message">{message}</p>}

        <div className="toggle-auth" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
        </div>
      </form>
    </div>
  );
};



export default LoginPopup;
