import { Route, Routes } from 'react-router-dom'; 
import './components/pages/Login.css'; 
import Login from './components/pages/Login'; 
import MainPage from './MainPage'; 
import { Home, Story, Safety_map } from './components/pages'; 

function App() { 
  return (
    <Routes>
      {/* Route for the login page */}
      <Route path="/" element={<Login />} />
      {/* Route for the home page, wrapped in MainPage layout */}
      <Route path="/home" element={<MainPage><Home /></MainPage>} />
      {/* Route for the story page, wrapped in MainPage layout */}
      <Route path="/story" element={<MainPage><Story /></MainPage>} />
      {/* Route for the safety map page, wrapped in MainPage layout */}
      <Route path="/safety_map" element={<MainPage><Safety_map /></MainPage>} />
    </Routes>
  );
}

export default App;
