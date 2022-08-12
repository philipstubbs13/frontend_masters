<script setup>
import { useRouter } from 'vue-router'
import { initializeApp } from 'firebase/app';
import { config } from '../config';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseApp = initializeApp(config.firebase);
const auth = getAuth(firebaseApp);
const router = useRouter();

async function signIn() {
  const result = await signInAnonymously(auth);
  router.push(`/dashboard`);
}

</script>

<template>
  <h1>I am the home page</h1>
  <h5>You should sign in here</h5>
  <button @click="signIn">Sign In</button>
</template>
