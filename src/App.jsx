
import './App.css'
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import NotFound from './components/NotFound';
import Navbar from './components/NavBar';

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/add-todo" element={<AddTodo/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
