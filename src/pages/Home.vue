<template>
  <div class="flex flex-col w-full h-full justify-center items-center">
    <h1>Create an Account</h1>

    <div class="form-control w-full max-w-xs items-center justify-center flex">
      <label class="label">
        <span class="label-text">What is your name?</span>
      </label>
      <input
        type="text"
        placeholder="Navn"
        class="input input-bordered input-secondary w-full max-w-xs my-2 text-white"
        v-model="userName"
        required
      />
      <input
        type="email"
        placeholder="Email"
        class="input input-bordered input-secondary w-full max-w-xs my-2 text-white"
        v-model="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
      />

      <input
        type="password"
        placeholder="Adgangskode"
        class="input input-bordered input-secondary w-full max-w-xs my-2 text-white"
        v-model="password"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
      />

      <button
        @click="register"
        class="btn mt-2"
        :class="userName === '' ? 'btn-disabled' : ''"
      >
        Submit
      </button>

      <button @click="register" class="btn mt-2">Login with facebook</button>
    </div>

    <div class="toast toast-end max-w-md">
      <div class="alert alert-error" v-if="errorMessages">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{{ errorMessages }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useRouter } from 'vue-router';
import { supabase } from '../supabase/supabase';
// import router
const email = ref('');
const userName = ref('');
const password = ref('');

const errorMessages = ref('');
const router = useRouter();
const loading = ref(false);

//Firebase docs: https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0

// get a reference to our vue router

const register = async () => {
  try {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'facebook',
    });
    console.log(user, 'user');
    console.log(session, 'session');

    if (error) throw error;
  } catch (error: any) {
    errorMessages.value = error.error_description || error.message;
  } finally {
    loading.value = false;
  }
};
</script>
