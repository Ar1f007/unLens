import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Login, Navbar, ForgotPassword, Register, RequireAuth } from './components';
import { AboutMe, Blog, Checkout, Home, NotFound } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout/:id"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </main>

      <Footer />
    </>
  );
}

export default App;
