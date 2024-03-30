<template>
  <div class="account-created">
    <!-- Image on the top -->
    <img src="../assets/correct.png" alt="Account Created Image" class="account-created-image">
    
    <h2 class="success-message">Product Uploaded Successfully</h2>
    
    <p class="subtitle">Great! You have successfully uploaded your first product.</p>
    
    <button @click="proceedToAddHome" class="proceed-button">Proceed to your dashboard</button>
  </div>
</template>

<script>
export default {
  methods: {
    proceedToAddHome() {
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>

@media only screen and (max-width: 600px) {
.account-created {
  text-align: center;
  font-family: 'Poppins';
  margin: 0 auto;
  max-width: 400px; 
  overflow-x: hidden;
}

.account-created-image {
  max-width: 100%;
}

.success-message {
  font-size: 23px;
  margin-top: 40px;
}

.subtitle {
  margin-top: 50px;
  font-size: 17px;
  text-align: left;
}

.proceed-button {
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #5E17EB;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Poppins';
}

.proceed-button:hover {
  background-color: #0056b3;
 }
}
</style>