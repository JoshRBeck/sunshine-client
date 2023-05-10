import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import ProfilePage from "./pages/ProfilePage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import WineListPage from "./pages/WineListPage"
import WineListDetailsPage from "./pages/WineListDetailsPage"

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/wine-list" element={<WineListPage/>} />
        <Route path="/wine-list-details" element={<WineListDetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
