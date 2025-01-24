import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./components/Header/Header";
import Header from "@/components/header/header";

const App = () => {
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
