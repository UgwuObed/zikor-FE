<template>
  <div class="setup-business-page">
    <div class="zikor-logo">
      <img src="../assets/zikor-logo.png" alt="Logo">
    </div>
    <h2>Set Up Business Page</h2>
    <p>Create your business page now to seize new opportunities.</p>
    <div class="form-group">
      <label for="business-name">Business Name</label>
      <input type="text" id="business-name" v-model="businessName" @blur="checkBusinessName">
      <p v-if="businessNameTouched && !businessName" class="error-message">Please enter your business name</p>
    </div>
    <div class="form-group">
      <label for="phone">Phone - Preferable WhatsApp</label>
      <input type="tel" id="phone" v-model="phoneNumber" @blur="checkPhone">
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
    <button @click="signup">Continue</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      businessName: '',
      phone: '',
      country: '',
      state: '',
      city: '',
      businessNameTouched: false,
      phoneNumberTouched: false,
      countryTouched: false,
      stateTouched: false,
      cityTouched: false
    };
  },
  methods: {
    validateSetupBusiness() {
      return this.businessName && this.phone && this.country && this.state && this.city;
    },
    checkBusinessName() {
      this.businessNameTouched = true;
    },
    checkPhoneNumber() {
      this.phoneTouched = true;
    },
    checkCountry() {
      this.countryTouched = true;
    },
    checkState() {
      this.stateTouched = true;
    },
    checkCity() {
      this.cityTouched = true;
    },
    submitForms() {
      // Check if both forms are valid
      if (this.validateSetupBusiness()) {
        // Prepare data for submission
        const formData = {
          businessName: this.businessName,
          phone: this.phone,
          country: this.country,
          state: this.state,
          city: this.city,
          firstName: this.$route.query.firstName,
          lastName: this.$route.query.lastName,
          email: this.$route.query.email,
          password: this.$route.query.password
        };

        // Example of submitting data to the signup endpoint
        this.$axios.post('/signup', formData)
          .then(response => {
            // Handle successful response
            console.log('Signup successful:', response.data);

            // Redirect to the account created page
            this.$router.push('/account-created');
          })
          .catch(error => {
            // Handle error
            console.error('Signup failed:', error);
          });
      }
    }
  }
};
</script>


<style scoped>
.setup-business-page {
  text-align: center;
  margin: 0 auto;
  max-width: 400px;
}

@media only screen and (max-width: 600px) {
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

