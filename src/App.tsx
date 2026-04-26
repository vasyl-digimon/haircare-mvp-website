import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Ледаче завантаження сторінок (Code Splitting)
const HomePage = lazy(() => import('./pages/HomePage'));
const KeratinPage = lazy(() => import('./pages/KeratinPage'));
const BotoxPage = lazy(() => import('./pages/BotoxPage'));
const NanoplastyPage = lazy(() => import('./pages/NanoplastyPage'));

// Тимчасовий фон для завантаження, щоб уникнути стрибків
const PageLoader = () => <div className="min-h-screen bg-stone-950" />;

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-stone-950 text-white antialiased">
          <Header />
          <main>
            {/* Suspense каже React чекати, поки підтягнеться код конкретної сторінки */}
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/keratynove-vyrivnyuvannya-lviv" element={<KeratinPage />} />
                <Route path="/botoks-volossya-lviv" element={<BotoxPage />} />
                <Route path="/nanoplastyka-volossya-lviv" element={<NanoplastyPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}