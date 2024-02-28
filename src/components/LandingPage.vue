<template>
  <div class="landing-page">
    <div class="header">
      <div class="logo">
        <img src="../assets/zikor-logo.png" alt="Logo">
      </div>
      <div class="hamburger-menu" v-if="isMobile">
        <button @click="toggleMenu">☰</button>
      </div>
    </div>

    <div class="content">
      <div class="centered-text">
        <h1>Start Selling with</h1>
        <h2>a whole new groove!<br>🚀💼</h2>
        <p>
          Zikor brings you a <span class="highlight-animation" :class="{ typing_out: isTypingOut, typing_in: isTypingIn }">cutting-edge</span> chat technology commerce platform, transforming the way you do business.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      highlightText: "cutting-edge",
      isTypingOut: false,
      isTypingIn: false,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 600;
    // Start the animation
    this.startTypingAnimation();
    // Listen for window resize events
    window.addEventListener('resize', this.updateIsMobile);
  },
  methods: {
    toggleMenu() {
      // Add logic to toggle your menu here
    },
    updateIsMobile() {
      // Update isMobile value based on viewport width
      this.isMobile = window.innerWidth <= 600;
    },
    startTypingAnimation() {
      // Initialize typing animation
      this.typeText();
    },
    typeText() {
      let i = 0;
      const text = "cutting-edge";
      const newText = "AI-driven";

      const loop = () => {
        if (this.isTypingOut) {
          if (i < text.length) {
            this.highlightText = text.slice(0, i);
            i++;
          } else {
            this.isTypingOut = false;
            this.isTypingIn = true;
            i = 0;
            setTimeout(() => {
              loop();
            }, 1000); // Delay before typing in again
            return;
          }
        }

        if (this.isTypingIn) {
          if (i <= newText.length) {
            this.highlightText = newText.substring(0, i);
            i++;
          } else {
            this.isTypingIn = false;
            this.isTypingOut = true;
            i = 0;
            setTimeout(() => {
              loop();
            }, 1000); // Delay before typing out again
            return;
          }
        }

        requestAnimationFrame(loop);
      };

      loop();
    },
  },
  beforeUnmount() {
    // Remove window resize event listener to prevent memory leaks
    window.removeEventListener('resize', this.updateIsMobile);
  }
};
</script>




  
<style scoped>

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo img {
    height: 50px;
    margin-top: 5px;
}


.hamburger-menu button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.content {
  margin-top: 100px; 
}

.centered-text {
  text-align: center; 
}

.highlight-animation {
  background-color: #5E17EB;
  color: white;
}

.typing_out,
.typing_in {
  /* Animation styles for appearance/disappearance */
  animation: typing 0.8s ease-in-out forwards;
}


@media only screen and (max-width: 600px) {
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.logo {
    align-self: flex-start; 
}

  .logo img {
    height: 35px;
    margin-top: 0;
  }

  .hamburger-menu {
    padding: 5px; 
  }

  .hamburger-menu button {
    font-size: 25px; 
  }

.content {
  margin-top: 100px; 
}

.centered-text {
  text-align: center; 
  font-family: 'Poppins-ExtraLight';
  font-size: 22px; 
  color: #000000;
  line-height: 2.2;
 
 }

.centered-text h2 {
  font-size: 25px;
  color: #000000;
  font-family: 'Poppins-Bold';
  margin-top: -48px; 
}

.centered-text p {
  font-size: 14px;
  font-family: 'Poppins';
  line-height: 1.5; 
  margin: 0 auto; 
  max-width: 90%;
}

}
</style>
  