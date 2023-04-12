import React from "react";
import { Header } from "./header";
import { SocialIcon } from 'react-social-icons';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf85J0hTEnlWChcUie2GDz8RT0TOir08E",
  authDomain: "stefan-ciocioiu.firebaseapp.com",
  projectId: "stefan-ciocioiu",
  storageBucket: "stefan-ciocioiu.appspot.com",
  messagingSenderId: "1053027404567",
  appId: "1:1053027404567:web:401ac95707f49f39e58552",
  measurementId: "G-NDB72E31DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default function Page() {
  return (
    <div>
      <Header />
      <section className="flex items-center justify-center flex-col gap-2 h-screen bg-fourth">
        <h1 className="text-3xl text-primary">Stefan Ciocioiu</h1>
        <h2 className="text-xl text-secondary">Crescator de iepuri</h2>
        <h3 className="text-lg text-third">Rasa Urias de Transilvania</h3>
        <a href = "#premii" className="text-lg text-third underline decoration-pink-500">Premii obtinute</a>
        <a href = "#galerie" className="text-lg text-third underline decoration-pink-500">Galerie</a>
        <a href = "#contact" className="text-lg text-third underline decoration-pink-500">Contact</a>
      </section>
      <section id = "premii" className="h-screen">
        <h2>Premii obtinute</h2>
        <SocialIcon url="https://www.facebook.com/profile.php?id=100016601654879" />
      </section>
      <section id = "galerie" className="h-screen">
        <h2>Galerie</h2>
      </section>
      <section id = "contact" className="h-screen">
        <h2>Contact</h2>
      </section>
    </div>
  );
}