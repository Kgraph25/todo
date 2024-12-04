import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEdbeErlOlE979l6hh_7_eUsA9r6SG-rE",
  authDomain: "todo-app-sample-76617.firebaseapp.com",
  projectId: "todo-app-sample-76617",
  storageBucket: "todo-app-sample-76617.firebasestorage.app",
  messagingSenderId: "571669418039",
  appId: "1:571669418039:web:d0cf8bab28006c4919efb2",
  measurementId: "G-STQQGXREDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })]
};
