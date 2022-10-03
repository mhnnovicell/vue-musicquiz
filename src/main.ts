import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { initializeApp } from 'firebase/app'; // TODO: Add SDKs for Firebase products that you want to use
import router from './router/router';
import client from './services/pocketbase';
import { pocketBaseSymbol } from './services/symbols';
import { supabase } from './supabase/supabase';

// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZfDYii9FqT1xLt2aeHAbHxYLOuar3sZU',
  authDomain: 'musicquiz-afdf6.firebaseapp.com',
  projectId: 'musicquiz-afdf6',
  storageBucket: 'musicquiz-afdf6.appspot.com',
  messagingSenderId: '351963363777',
  appId: '1:351963363777:web:9c9e66e4244f753341d740',
};

const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);

app.provide(pocketBaseSymbol, client);

// Initialize Firebase

app.mount('#app');
