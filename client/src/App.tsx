import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar fijo arriba */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Contenido principal centrado */}
      <main className="flex-grow flex items-center justify-center bg-gray-200">
        <Main />
      </main>

      {/* Footer al final */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
