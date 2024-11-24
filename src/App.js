import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Base } from './components/Base';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Base />} />
      <Route path="/adogazda" element={<Base />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
