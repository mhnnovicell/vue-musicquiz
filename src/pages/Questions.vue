<template>
  <div class="flex flex-col w-full h-full justify-center items-center">
    <ul class="steps mb-4 w-1/2">
      <li class="step step-primary text-white" data-content="✓"></li>
      <li class="step text-white" data-content="✕"></li>
      <li class="step text-white"></li>
      <li class="step text-white"></li>
    </ul>
    <div class="card w-1/3 bg-primary text-white shadow-md my-4">
      <div class="card-body text-center justify-center items-center">
        <h2 class="card-title text-center">Hvad hedder sangen?</h2>
      </div>
    </div>
    <div class="flex flex-col w-1/3">
      <button class="btn shadow-md my-2">Button</button>
      <button class="btn shadow-md my-2">Button</button>
      <button class="btn shadow-md my-2">Button</button>
      <button class="btn shadow-md my-2">Button</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getDatabase, onValue, ref as firebaseRef } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const db = getDatabase();
const auth = getAuth();

const docRef = doc(db, 'cities', 'SF');
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log('Document data:', docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log('No such document!');
}

onMounted(() => {});
</script>

<style scoped></style>
