import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [errors, setErrors] = useState([]);
  const [showLogo, setShowLogo] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const response = await fetch('http://localhost:8000/csrf-token');
        if (response.ok) {
          setCsrfToken(response.headers.get('X-CSRF-TOKEN'));
        } else {
          console.log('Failed to fetch CSRF token');
        }
      } catch (error) {
        console.log('An error occurred while fetching CSRF token:', error);
      }
    }

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login successful
        console.log('Login successful!');
        // Optionally, you can clear the form fields here
        setEmail('');
        setPassword('');

        // Redirect to the dashboard page
        setShowLogo(true);
        setTimeout(() => {
          router.push('/dashboard');
        }, 5000);
      } else {
        // Handle error
        const errorData = await response.json();
        if (errorData.errors) {
          const errorMessages = Object.values(errorData.errors);
          setErrors(errorMessages);
        } else {
          setErrors(['Login not successful. ' + errorData.message]);
        }
      }
    } catch (error) {
      // Handle fetch error
      console.log('An error occurred:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {showLogo ? (
        <video autoPlay muted loop className={styles.logo}>
          <source src="/logo.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.logoPicture}>
              <img src="/zikor-logo.png" alt="Logo" />
            </div>
            <p className={styles.login}>Login</p>
            <label className={styles.label}>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.inputField}
              />
            </label>
            <br />
            <label className={styles.label}>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.inputField}
              />
            </label>
            <br />
            {errors.length > 0 && (
              <div className={styles.errorContainer}>
                {errors.map((error, index) => (
                  <p key={index} className={styles.errorMessage}>
                    {error}
                  </p>
                ))}
              </div>
            )}
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
