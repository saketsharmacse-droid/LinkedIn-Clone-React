import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Switch has been replaced with Routes in the latest React Router v6
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} >
          </Route>
          <Route path="/home" element={
            <>
            <Header/>
            <Home/>
            </>
            }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
