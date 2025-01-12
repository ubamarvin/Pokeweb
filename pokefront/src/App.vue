<script setup>
import { ref, onMounted } from 'vue';
import { auth } from './firebase';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';
import NavigationPanel from './components/app/NavigationPanel.vue';

const user = ref(null);
const showAuthPopup = ref(false);
const email = ref('');
const password = ref('');
const isSignup = ref(false);

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
    showAuthPopup.value = !currentUser;
  });
});

async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    user.value = result.user;
    showAuthPopup.value = false;
  } catch (error) {
    alert('Google login failed: ' + error.message); // Show alert on error
  }
}

async function signupWithEmail() {
  try {
    const result = await createUserWithEmailAndPassword(auth, email.value, password.value);
    user.value = result.user;
    showAuthPopup.value = false;
  } catch (error) {
    alert(handleFirebaseError(error)); // Show alert on error
  }
}

async function loginWithEmail() {
  try {
    const result = await signInWithEmailAndPassword(auth, email.value, password.value);
    user.value = result.user;
    showAuthPopup.value = false;
  } catch (error) {
    alert(handleFirebaseError(error)); // Show alert on error
  }
}

async function logout() {
  await signOut(auth);
  user.value = null;
  showAuthPopup.value = true;
}

function handleFirebaseError(error) {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'Invalid email format. Please enter a valid email.';
    case 'auth/email-already-in-use':
      return 'This email is already in use. Please log in instead.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your connection.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
}
</script>


<template>
  <div id="app">
    <div class="auth-container" v-if="!user">
      <div class="sign-up-form">
        <h1 class="login-h1">{{ isSignup ? 'Sign Up' : 'Login' }}</h1>

        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />

        <button class="sign-btn" @click="isSignup ? signupWithEmail() : loginWithEmail()">
          {{ isSignup ? 'Sign Up' : 'Login' }}
        </button>

        <p>
          <span @click="isSignup = !isSignup" style="cursor: pointer; color: blue;">
            {{ isSignup ? 'Login' : 'Create a new account' }}
          </span>
        </p>

        <p class="login-with">or continue with</p>

        <button class="google-btn" @click="loginWithGoogle">
          <img src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png" alt="Google logo" />
          Login with Google
        </button>
      </div>
    </div>

    <div v-else>
      <NavigationPanel :onLogout="logout"/>
    </div>
  </div>
</template>


<style>


.auth-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
} 

.sign-up-form {
  padding: 20px;
  border-radius: 8px;
  background-color: black;
  opacity: 0.9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.login-h1,
.login-with {
  color: white;
}



.google-btn,
.sign-btn {
  padding: 8px 16px;
  margin: 10px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.google-btn img {
  height: 20px;
  margin-right: 8px;
}
input {
  display: block;
  margin: 8px 0;
  padding: 8px;
  width: 200px;
}
.logout-btn {
  padding: 8px 16px;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
