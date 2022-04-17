import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Login, Navbar, Register } from './components';
import { Home } from './pages';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<div>Home</div>} />
          <Route path="/about" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
