import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import Eurogames from "./views/generalviews/Eurogames";
import Familiares from "./views/generalviews/Familiares";
import Party from "./views/generalviews/Party";
import Folders from "./views/generalviews/Folders";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-grow flex items-center justify-center bg-gray-200">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="eurogames" element={<Eurogames />} />
            <Route path="familiares" element={<Familiares />} />
            <Route path="party" element={<Party />} />
            <Route path="folders" element={<Folders />} />
          </Routes>
        </main>
        <footer className="w-full"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
