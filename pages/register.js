import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/register.module.css';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [error, setError] = useState('');
  const [showLogo, setShowLogo] = useState(true);
  const [showStep2, setShowStep2] = useState(false);

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

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    setShowStep2(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      console.log('Password and password confirmation do not match');
      return;
    }

    const formData = {
      first_name: firstName,
      last_name: lastName,
      business_name: businessName,
      email,
      phone,
      password,
      password_confirmation: passwordConfirmation,
      state,
      country,
      city,
    };

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        console.log('Registration successful!');
        // Optionally, you can clear the form fields here
        setFirstName('');
        setLastName('');
        setBusinessName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setPasswordConfirmation('');
        setState('');
        setCountry('');
        setCity('');

        // Redirect to the dashboard page
        setShowLogo(true);
        setTimeout(() => {
          router.push('/dashboard');
        }, 5000);
      } else {
        // Handle error
        const errorData = await response.json();
        setError('Registration not successful. ' + errorData.message);
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
          {!showStep2 && (
            <form onSubmit={handleSubmitStep1} className={styles.form}>
              <div className={styles.logoPicture}>
                <img src="/zikor-logo.png" alt="Logo" />
              </div>
              <p className={styles.signUp}>Sign Up</p>
              <label className={styles.label}>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </label>
              <br />
              <label className={styles.label}>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </label>
              <br />
              <label className={styles.label}>
                Business Name:
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </label>
              <br />
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
                Phone:
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </label>
              <br />
              <button type="submit" className={styles.nextButton}>
                Continue
              </button>
            </form>
          )}

          {showStep2 && (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.logoPicture}>
                <img src="/zikor-logo.png" alt="Logo" />
              </div>
              <p className={styles.signUp}>Sign Up (Step 2)</p>
              <label className={styles.label}>
                Country:
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </label>
              <br />
              <label className={styles.label}>
                State:
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </label>
              <br />
              <label className={styles.label}>
                City:
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
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
              <label className={styles.label}>
                Confirm Password:
                <input
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </label>
              <br />
              {error && <p className={styles.errorMessage}>Error: {error}</p>}
              <button type="submit" className={styles.submitButton}>
                Register
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
