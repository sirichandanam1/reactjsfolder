import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';




function App() {
  return (
    <div className="App">
      <BrowserRouter>

<Routes>

  <Route path="/dashboard" element={<Dashboard />}></Route>

</Routes>

<Home />

</BrowserRouter>
    </div>
  );
}

export default App;
