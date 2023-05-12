import './App.css';
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import ProfilePage from "./pages/ProfilePage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import WineListPage from "./pages/WineListPage"
import WineListDetailsPage from "./pages/WineListDetailsPage"
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';
import AddWine from './pages/AddWine';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/wine-list" element={<IsAnon><WineListPage /></IsAnon>} />
        <Route path="/wine-list-details" element={<IsAnon><WineListDetailsPage /></IsAnon>} />
        <Route path="/profile" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route path="/addwine" element={<IsPrivate><AddWine /></IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;
