import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/base.css'
import './styles/variables.css'
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footbar from './components/Footbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
      </Routes>
      <Footbar />
    </Router>
  );
}

export default App;
