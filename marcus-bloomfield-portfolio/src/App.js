import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';

const HeroSection = React.lazy(() => import('./sections/HeroSection'));
const AboutSection = React.lazy(() => import('./sections/AboutSection'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <AboutSection />
      </Suspense>
    </div>
  );
}

export default App;
