import { useState } from 'react';
import { useRouter } from 'next/router';

const ProfileForm = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      country,
      state,
      city,
    };

    try {
      const response = await fetch('http://localhost:8000/profile',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Profile creation successful, redirect to the dashboard
        router.push('/dashboard');
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
        Country:
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileForm;
