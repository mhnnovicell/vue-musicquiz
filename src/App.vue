<template>
  <section class="text-gray-600 body-font w-full h-full" data-theme="cupcake">
    <div class="container px-5 py-24 mx-auto w-full h-full">
      <router-view />
    </div>
  </section>
</template>

<style scoped></style>

<script lang="ts" setup>
import { onMounted } from 'vue';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useRouter } from 'vue-router';
import { supabase } from './supabase/supabase';

const router = useRouter();
const auth = getAuth();

onMounted(() => {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
  });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push('/questions');
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user, 'user');
      // ...
    } else {
      // User is signed out
      // ...
      console.log('user not logged in');
      router.push('/');
    }
  });
});
</script>
