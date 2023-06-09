import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const RegisterForm = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [businessName, setBusinessName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');
const [passwordConfirmation, setPasswordConfirmation] = useState('');
const [csrfToken, setCsrfToken] = useState('');

const router = useRouter();

useEffect(() => {
async function fetchCsrfToken() {
try {
const response = await fetch('http://localhost:8000/csrf-cookie');
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
};

try {
  const response = await fetch('http://localhost:8000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken,
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    // Registration successful, redirect to the profile creation page
    router.push('/profile/create');
  } else {
    // Handle error
    const errorData = await response.json();
    console.log('Error:', errorData);
  }
} catch (error) {
  // Handle fetch error
  console.log('An error occurred:', error);
}
};

 return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Business Name:
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;