import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaginaImovel from './pages/PaginaImovel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/imovel/:id" element={<PaginaImovel />} />
    </Routes>
  );
}

export default App;
