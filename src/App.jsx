import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";


function App() {
  return (
    <>
    <Header/>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
