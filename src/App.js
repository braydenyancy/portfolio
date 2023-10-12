import './App.scss';
import { Routes, Route, Redirect, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import StaleFish from './components/StaleFish';
import Contact from './components/Contact';
import Arcade from './components/Arcade';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/portfolio" index element={<Home />} />
          <Route path="/StaleFish" element={<StaleFish />} />
          <Route path="/Arcade" element={<Arcade />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
          <Route index element={<Navigate to ="/portfolio"/>}/>
      </Routes>
    </>
  );
}

export default App;
