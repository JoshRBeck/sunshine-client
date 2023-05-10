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
      <Navbar />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/wine-list" element={<WineListPage/>} />
        <Route path="/wine-list-details" element={<WineListDetailsPage/>} />
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<isPrivate><ProfilePage /></isPrivate>} />
        <Route path="/signup" element={<isAnon><SignupPage /></isAnon>} />
        <Route path="/login" elment={<isAnon><LoginPage /></isAnon>} />
        <Route path="/wine-list" element={<isAnon><WineListPage /></isAnon>} />
        <Route path="/wine-list-details" element={<isAnon><WineListDetailsPage /></isAnon>} />
>>>>>>> 28e2f04855446d9b779e50f6a3c517713e6c0b3d
      </Routes>
    </div>
  );
}

export default App;
