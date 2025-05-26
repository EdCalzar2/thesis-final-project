import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import './components/pages/Login.css'; 
import Login from './components/pages/Login'; 
import MainPage from './MainPage'; 
import { Home, Story, Safety_map } from './components/pages'; 
import Admin from './components/pages/Admin';

function App() { 
  const [stories, setStories] = useState([]);
  return (
    <Routes>
      {/* Route for the login page */}
      <Route path="/" element={<Login />} />
      {/* Route for the home page, wrapped in MainPage layout */}
      <Route path="/home" element={<MainPage><Home /></MainPage>} />
      {/* Route for the story page, wrapped in MainPage layout */}
      <Route path="/story" element={<MainPage><Story stories={stories} setStories={setStories} /></MainPage>} />
      {/* Route for the safety map page, wrapped in MainPage layout */}
      <Route path="/safety_map" element={<MainPage><Safety_map /></MainPage>} />
      {/* Route for the admin page, NO MainPage layout (no Navbar) */}
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
