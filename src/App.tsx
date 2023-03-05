import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './Screens/Auth';
import DashBoard from './Screens/DashBoard';
import Card from './Components/Cards/Card';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="w-[100%] h-[100%] ">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
