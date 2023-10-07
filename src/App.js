import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import StaleFish from './components/StaleFish';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/portfolio" index element={<Home />} />
          <Route path="/StaleFish" element={<StaleFish />} />
          <Route path="/Arcade" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
