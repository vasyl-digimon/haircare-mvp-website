import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import KeratinPage from './pages/KeratinPage';
import ScrollToTop from './components/ScrollToTop'; // Додамо пізніше, щоб сторінка відкривалась згори

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-950 text-white antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/keratynove-vyrivnyuvannya-lviv" element={<KeratinPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}