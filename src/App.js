import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import About from './pages/About';
import Favoris from './pages/Favoris';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
   <BrowserRouter>
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          
            <Route index exact element={<Home />} />
            <Route path="about" exact element={<About />} />
            <Route path="favoris" exact element={<Favoris />} />
            <Route path="*" element={<NotFound />} />
           
        
        </Routes>
      </Suspense>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
