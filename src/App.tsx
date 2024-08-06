 import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navigation/Navbar";
import { Container } from "@mui/material";

function App() {

  return (
    <Container
    >
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </Router>
      </Container>
  )
}

export default App
