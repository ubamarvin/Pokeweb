<template>
    <div v-if="visible" class="auth-popup-overlay">
      <div class="auth-popup">
        <h2>Login</h2>
        <button @click="loginWithGoogle">Login with Google</button>
        <button @click="loginWithGithub">Login with GitHub</button>
  
        <form @submit.prevent="loginWithEmail">
          <input v-model="email" type="email" placeholder="Email" />
          <input v-model="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
  
        <button class="close-button" @click="closePopup">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  import {
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { auth } from "../firebase.js"; // Import the initialized auth object
  
  export default {
    props: {
      visible: Boolean,
    },
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          console.log("User logged in:", result.user);
          this.$emit("authenticated", result.user);
          this.closePopup();
        } catch (error) {
          console.error("Google login failed", error);
        }
      },
      async loginWithGithub() {
        const provider = new GithubAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          console.log("User logged in:", result.user);
          this.$emit("authenticated", result.user);
          this.closePopup();
        } catch (error) {
          console.error("GitHub login failed", error);
        }
      },
      async loginWithEmail() {
        try {
          const result = await signInWithEmailAndPassword(auth, this.email, this.password);
          console.log("User logged in:", result.user);
          this.$emit("authenticated", result.user);
          this.closePopup();
        } catch (error) {
          console.error("Email login failed", error);
        }
      },
      closePopup() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
  .auth-popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .auth-popup {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    text-align: center;
  }
  
  .close-button {
    margin-top: 10px;
    padding: 5px 10px;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button {
    margin: 10px 0;
    padding: 8px 16px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  </style>
  