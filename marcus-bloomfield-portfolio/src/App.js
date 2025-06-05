import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import LazySection from './components/LazySection';
import NavBar from './components/NavBar';

const HeroSection = React.lazy(() => import('./sections/HeroSection'));
const AboutSection = React.lazy(() => import('./sections/AboutSection'));


function App() {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <LazySection id="hero">
          <HeroSection />
        </LazySection>
        <LazySection id="about">
          <AboutSection />
        </LazySection>
      </Suspense>
    </div>
  );
}

export default App;
