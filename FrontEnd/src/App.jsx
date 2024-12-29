import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navbar';
import Home from './Pages/Home';
import footerData from './Constants/FooterData';

function App() {
  return (
    <div className="w-screen bg-gray-100 overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-lg">
      <Navbar />
      <div className="px-5 py-4">
        <Home />
      </div>
      <Footer data={footerData} />
    </div>
  );
}

export default App;
