import './App.scss';
import { Routes, Route, Redirect, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import StaleFish from './components/Projects/Stalefish';
import Contact from './components/Contact';
import Arcade from './components/Projects/Arcade';
import Rankings from './components/Rankings';
import Bipolar from './components/Projects/Bipolar';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" index element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Bipolar" element={<Bipolar />} />
          <Route path="/StaleFish" element={<StaleFish />} />
          <Route path="/Arcade" element={<Arcade />} />
          <Route path="/Rankings" element={<Rankings />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route index element={<Navigate to="/Home" />} />
      </Routes>
    </>
  );
}

export default App;
