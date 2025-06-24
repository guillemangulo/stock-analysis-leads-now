import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import InterestForm from './pages/InterestForm';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/"       element={<Index />} />
      <Route path="/interest" element={<InterestForm />} />
      <Route path="*"       element={<NotFound />} />
    </Routes>
  );
}
