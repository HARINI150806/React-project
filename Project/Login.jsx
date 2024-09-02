import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Login.css';

const styles = {
  container: {
    backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20230722/pngtree-financial-transaction-tools-on-blue-background-3d-render-for-accountancy-image_3780303.jpg")',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  header: {
    color: 'black',
    textAlign: 'center',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '96%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
  toggle: {
    textAlign: 'center',
    marginTop: '15px',
  },
  toggleLink: {
    color: '#007BFF',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  message: {
    textAlign: 'center',
    color: '#ff0000',
    marginTop: '10px',
  },
  checkbox: {
    marginRight: '10px',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: '10px',
  },
  resetForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  resetInput: {
    marginBottom: '15px',
  },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showReset, setShowReset] = useState(false); // State for showing the reset form

  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      if (isSignup) {
        if (password === confirmPassword) {
          setMessage('Signup Successful!<br /><br />Redirecting...');
          setTimeout(() => {
            navigate('/welcome', { state: { fromLogin: true } }); // Redirect to welcome with state
          }, 3000);
        } else {
          alert("Passwords don't match.");
          setMessage('Signup failed. Try again!');
        }
      } else {
        setMessage('Login Successful!<br /><br />Redirecting...');
        setTimeout(() => {
          navigate('/welcome', { state: { fromLogin: true } }); // Redirect to welcome with state
        }, 3000);
      }
    } else {
      alert('Please fill in all fields.');
      setMessage('Operation failed. Try again!');
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    if (resetEmail && newPassword && confirmNewPassword) {
      if (newPassword === confirmNewPassword) {
        // Add your password reset logic here
        setMessage('Password reset successful!<br /><br />Redirecting...');
        setTimeout(() => {
          navigate('/welcome'); // Redirect to welcome page after successful reset
        }, 3000);
      } else {
        alert("Passwords don't match.");
        setMessage('Password reset failed. Try again!');
      }
    } else {
      alert('Please fill in all fields.');
      setMessage('Password reset failed. Try again!');
    }
  };

  return (
    <div style={styles.container}>
      {showReset ? (
        <form style={styles.form} onSubmit={handleReset}>
          <h2 style={styles.header}>Reset Your Password</h2>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="resetEmail">Email:</label>
            <input
              style={styles.input}
              type="email"
              id="resetEmail"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="newPassword">New Password:</label>
            <input
              style={styles.input}
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="confirmNewPassword">Confirm New Password:</label>
            <input
              style={styles.input}
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>
          <button style={styles.button} type="submit">Reset Password</button>
          {message && <p style={styles.message} dangerouslySetInnerHTML={{ __html: message }}></p>}
          <div style={styles.toggle}>
            <p>
              <span
                onClick={() => setShowReset(false)}
                style={styles.toggleLink}
              >
                Back to Login
              </span>
            </p>
          </div>
        </form>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.header}>{isSignup ? 'Accounting System Signup' : 'Accounting System Login'}</h2>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input
              style={styles.input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">Password:</label>
            <input
              style={styles.input}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isSignup && (
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="confirmPassword">Confirm Password:</label>
              <input
                style={styles.input}
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          {isSignup && (
            <div style={styles.inputGroup}>
              <label>
                <input
                  type="checkbox"
                  style={styles.checkbox}
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
            </div>
          )}
          <button style={styles.button} type="submit">{isSignup ? 'Signup' : 'Login'}</button>
          {message && <p style={styles.message} dangerouslySetInnerHTML={{ __html: message }}></p>}
          {!isSignup && (
            <div style={styles.forgotPassword}>
              <a href="#forgot-password" style={styles.toggleLink} onClick={() => setShowReset(true)}>Forgot Password?</a>
            </div>
          )}
          <div style={styles.toggle}>
            <p>
              {isSignup ? 'Already a user? ' : 'New user? '}
              <span
                onClick={() => setIsSignup(!isSignup)}
                style={styles.toggleLink}
              >
                {isSignup ? 'Login' : 'Signup'}
              </span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
