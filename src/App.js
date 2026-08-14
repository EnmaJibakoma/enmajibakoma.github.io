import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/base/base.css'
import './styles/base/variables.css'
import './styles/base/scrollbar.css'
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
