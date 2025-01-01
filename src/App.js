import './App.css';
import Home from './pages/Home';
import '../src/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Joinmove from './pages/Joinmove';

function App() {
  return (
    <div className="App" style={{margin:'0'}}>
   

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/actions' element={<Joinmove/>}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
