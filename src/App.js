import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import Layout from './Components/Layout';
import Authenticate from './Components/Authenticate';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route element = {<Authenticate/>}>
        <Route path="/" element={<Layout/>}>
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/result" element={<Result/>} />
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
