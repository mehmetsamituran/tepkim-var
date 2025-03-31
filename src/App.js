import React from 'react';
import { Routes, Route } from 'react-router-dom';
// ...existing code...

function App() {
  return (
    <div>
      {/* Router bağlamı içinde rotalar tanımlanır */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...existing routes... */}
      </Routes>
    </div>
  );
}

export default App;
