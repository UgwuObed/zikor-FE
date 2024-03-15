<template>
  <div class="signup-workflow">
    <div v-if="currentStep === 'signup'" class="signup-form">
        <div class="zikor-logo">
      <img src="../assets/zikor-logo.png" alt="Logo">
    </div>
    <h2>Sign Up</h2>
    <p>Let's kickstart your journey by creating your account.</p>
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" v-model="first_name" @blur="checkFirstName">
    <p v-if="firstNameTouched && !first_name" class="error-message">First name cannot be empty</p>
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" v-model="last_name" @blur="checkLastName">
      <p v-if="lastNameTouched && !last_name" class="error-message">Last name connot be empty</p>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="checkEmail">
      <p v-if="emailTouched && !email" class="error-message">Please provied email</p>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" @blur="checkPassword">
      <p v-if="passwordTouched && !password" class="error-message">Please enter your password</p>
    </div>
    <div class="form-group">
  <label for="password_confirmation">Confirm Password</label>
  <input type="password" id="password_confirmation" v-model="password_confirmation">
  <p v-if="passwordConfirmationTouched && !password_confirmation" class="error-message">Please confirm your password</p>
</div>
      <button @click="submitSignup">Sign Up</button>
      <p>Already have an account? <a href="#" @click="signIn">Sign In</a></p>
    </div>

    <div v-if="currentStep === 'business-setup'" class="setup-business-page">
    <div class="zikor-logo">
      <img src="../assets/zikor-logo.png" alt="Logo">
    </div>
    <h2>Set Up Business Page</h2>
    <p>Create your business page now to seize new opportunities.</p>
    <div class="form-group">
      <label for="business-name">Business Name</label>
      <input type="text" id="business-name" v-model="business_name" @blur="checkBusinessName">
      <p v-if="businessNameTouched && !business_name" class="error-message">Please enter your business name</p>
    </div>
    <div class="form-group">
      <label for="phone">Phone - Preferable WhatsApp</label>
      <input type="tel" id="phone" v-model="phone" @blur="checkPhone">
      <p v-if="phoneTouched && !phone" class="error-message">Please enter your phone number</p>
    </div>
    <div class="location">
    <h4>Business Location</h4>
    <p>Make sure your location is set correctly to improve your sales around you.</p>
    </div>
    <div class="form-group">
      <label for="country">Country</label>
      <input type="text" id="country" v-model="country" @blur="checkCountry">
      <p v-if="countryTouched && !country" class="error-message">Please enter country</p>
    </div>
    <div class="form-group">
      <label for="state">State</label>
      <input type="text" id="state" v-model="state" @blur="checkState">
      <p v-if="stateTouched && !state" class="error-message">Please enter state</p>
    </div>
    <div class="form-group">
      <label for="city">City</label>
      <input type="text" id="city" v-model="city" @blur="checkCity">
      <p v-if="cityTouched && !city" class="error-message">Please enter your city</p>
    </div>
      <button @click="submitForms">Continue</button>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { BASE_URL } from '../config';

export default {
  data() {
    return {
      // Signup form data
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '', 

      // Business setup form data
      business_name: '',
      phone: '',
      country: '',
      state: '',
      city: '',

      // Step management
      currentStep: 'signup',
    };
  },
  methods: {

    routeExists(route) {
    return this.$router.options.routes.some(r => r.path === route);
  },

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.$router.push('/login');
  },

    // Signup form validation and submission
    validateSignup() {
      return (
        this.first_name &&
        this.last_name &&
        this.email &&
        this.password
      );
    },
    submitSignup() {
      if (this.validateSignup()) {
        // Move to the next step after successful signup
        this.currentStep = 'business-setup';
      }
    },

  prepareFormData() {
      return {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        business_name: this.business_name,
        phone: this.phone,
        country: this.country,
        state: this.state,
        city: this.city,
  };
},

submitForms() {
  if (this.validateSignup() && this.validateBusinessSetup()) {
    const formData = this.prepareFormData();

    axios.post(`${BASE_URL}/register`, formData)
      .then(response => {
        console.log('Signup and business setup successful:', response.data);
        const redirectUrl = response.data.redirect;
        if (redirectUrl) {
          if (this.routeExists(redirectUrl)) {
            localStorage.setItem('isAuthenticated', true);
            window.location.href = redirectUrl;
          } else {
            console.error('Redirect URL does not exist on the frontend:', redirectUrl);
          }
        } else {
          console.error('Redirect URL not found in response.');
        }
      })
      .catch(error => {
        console.error('Submission failed:', error);
      });
  }
},



    // Separate validation methods for clarity (can be combined if desired)
    validateBusinessSetup() {
      return (
        this.business_name &&
        this.phone &&
        this.country &&
        this.state &&
        this.city
      );
    },
  },
};
</script>

<style scoped>

@media only screen and (max-width: 600px) {
.signup-form {
  text-align: center;
  margin: 0 auto;
  max-width: 400px; 
  overflow-x: hidden;
  font-family: 'Poppins';
}
.form-group {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
  margin-left: 10px;
}

label {
  display: block; 
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 90%;
  height: 40px; 
  border: 1px solid #5E17EB;
  background-color: white;
  border-radius: 5px;
  outline: none;
}

  button {
    padding: 20px 40px;
    background-color: #5E17EB;
    color: white;
    border: none;
    border-radius: 5px;
    width: 50%;
    height: 35px;
    align-item: center;
    line-height: 2px;
    font-family: 'Poppins-Bold';
    font-size: 12px;
  }

  .zikor-logo {
    align-self: flex-start; 
    margin-right: 290px;
    }

  .zikor-logo img {
    height: 35px;
    margin-top: 0;
  }

.error-message {
  color: red;
  margin-top: 5px;
}

.setup-business-page {
  text-align: center;
  margin: 0 auto;
  max-width: 400px; 
  overflow-x: hidden;
  font-family: 'Poppins';
}
.form-group {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
  margin-left: 10px;
}

label {
  display: block; 
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
  width: 90%;
  height: 30px; 
  border: 1px solid #5E17EB;
  background-color: white;
  border-radius: 5px;
  outline: none;
}

  button {
    padding: 20px 40px;
    background-color: #5E17EB;
    color: white;
    border: none;
    border-radius: 5px;
    width: 50%;
    height: 35px;
    align-item: center;
    line-height: 2px;
    font-family: 'Poppins-Bold';
    font-size: 13px;
  }

  .zikor-logo {
    align-self: flex-start; 
    margin-right: 290px;
    }

  .zikor-logo img {
    height: 35px;
    margin-top: 0;
  }

.error-message {
  color: red;
  margin-top: 5px;
 }

 .location p{
 font-size: 14px;
 }


}
</style>
