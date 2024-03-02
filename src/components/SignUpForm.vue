<template>
  <div class="signup-form">
    <div class="zikor-logo">
      <img src="../assets/zikor-logo.png" alt="Logo">
    </div>
    <h2>Sign Up</h2>
    <p>Let's kickstart your journey by creating your account.</p>
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" v-model="firstName" @blur="checkFirstName">
      <p v-if="firstNameTouched && !firstName" class="error-message">Please enter your first name</p>
    </div>
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" v-model="lastName" @blur="checkLastName">
      <p v-if="lastNameTouched && !lastName" class="error-message">Please enter your last name</p>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="checkEmail">
      <p v-if="emailTouched && !email" class="error-message">Please enter your email</p>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" @blur="checkPassword">
      <p v-if="passwordTouched && !password" class="error-message">Please enter your password</p>
    </div>
    <button @click="signup">Sign Up</button>
    <p>Already have an account? <a href="#" @click="signIn">Sign In</a></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      firstNameTouched: false,
      lastNameTouched: false,
      emailTouched: false,
      passwordTouched: false
    };
  },
  methods: {
    signup() {
      this.firstNameTouched = true;
      this.lastNameTouched = true;
      this.emailTouched = true;
      this.passwordTouched = true;
      
      // Check if any field is empty
      if (!this.firstName || !this.lastName || !this.email || !this.password) {
        alert("Please fill in all fields.");
        return;
      }
      
      // You can perform signup action here
      // Redirect to setup business page
      this.$router.push('/setup-business');
    },
    signIn() {
      this.$router.push('/signin');
    },
    checkFirstName() {
      this.firstNameTouched = true;
    },
    checkLastName() {
      this.lastNameTouched = true;
    },
    checkEmail() {
      this.emailTouched = true;
    },
    checkPassword() {
      this.passwordTouched = true;
    }
  }
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


}
</style>
