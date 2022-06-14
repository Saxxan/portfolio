import './App.css';
import { Routes, Route } from 'react-router-dom';
import PageHeader from './components/header/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import DesignProjects from './pages/DesignProjects/DesignProjects';
import DevelopProjects from './pages/DevelopProjects/DevelopProjects';
import Contact from './pages/Contact/Contact';
import DesignProject from './pages/DesignProject/DesignProject';
import DevelopProject from './pages/DevelopProject/DevelopProject';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/design-projects" element={<DesignProjects />} />
        <Route path="/develop-projects" element={<DevelopProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detailed-design-project/:title" element={<DesignProject />} />
        <Route path="/detailed-develop-project/:title" element={<DevelopProject />} />
      </Routes>
    </div>
  );
}

export default App;
