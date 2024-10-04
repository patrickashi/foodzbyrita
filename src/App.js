import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Homep from './pages/Homep';





function App() {
  return (
    <Router>
      <div className="App">
        <NavbarWithLocation />
        <div className='content'>
          <Routes>
          <Route index path='/' element={<Homep />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const NavbarWithLocation = () => {
  const location = useLocation();
  return <Navbar location={location} />;
};

export default App;
