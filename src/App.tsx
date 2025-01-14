import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Achievements from './components/achievements/Achievements';
import LatestNews from './components/news/LatestNews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ExportersDirectory from './components/directory/ExportersDirectory';
import CompanyDetail from './components/directory/CompanyDetail';
import ExhibitionList from './components/exhibitions/ExhibitionList';
import ExhibitionDetail from './components/exhibitions/ExhibitionDetail';
import { ThemeProvider } from './context/ThemeContext';
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
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <Achievements />
                <LatestNews />
                <Contact />
              </>
            } />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/directory" element={<ExportersDirectory />} />
            <Route path="/directory/:id" element={<CompanyDetail />} />
            <Route path="/exhibitions" element={<ExhibitionList />} />
            <Route path="/exhibitions/:id" element={<ExhibitionDetail />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;