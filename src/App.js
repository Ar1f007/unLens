import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home } from './pages';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<div>Home</div>} />
          <Route path="/blogs" element={<div>Home</div>} />
          <Route path="/about" element={<div>Home</div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
