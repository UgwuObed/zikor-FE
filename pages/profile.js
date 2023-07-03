import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProfileForm = ({ user }) => {
  const [formData, setFormData] = useState({
    business_name: user?.business_name || '',
    country: user?.country || '',
    state: user?.state || '',
    city: user?.city || '',
  });
  const [csrfToken, setCsrfToken] = useState('');
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

    async function fetchUserData() {
      try {
        const response = await fetch('http://localhost:8000/profile/user', {
          // Add any necessary headers, such as authentication headers
        });

        if (response.ok) {
          const userData = await response.json();
          setFormData({
            business_name: userData.business_name || '',
            country: userData.country || '',
            state: userData.state || '',
            city: userData.city || '',
          });
        } else {
          console.log('Failed to fetch user data');
        }
      } catch (error) {
        console.log('An error occurred while fetching user data:', error);
      }
    }

    fetchCsrfToken();
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Profile update successful, redirect to the dashboard
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Business Name:
        <input
          type="text"
          name="business_name"
          value={formData.business_name}
          onChange={handleChange}
          placeholder={user?.business_name}
        />
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder={user?.country}
        />
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder={user?.state}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder={user?.city}
        />
      </label>
      <br />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
