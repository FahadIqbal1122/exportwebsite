import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Achievements from './components/achievements/Achievements';
import LatestNews from './components/news/LatestNews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './i18n/i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <HomePage />
        <Achievements />
        <LatestNews />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;