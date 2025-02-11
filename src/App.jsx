import { Routes, Route } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import GetStarted from './pages/GetStarted';
import HelpHub from './components/HelpHub';
import FloatingFeedback from './components/FloatingFeedback';
import { AuthProvider } from './context/AuthContext';
import { questConfig } from './config/questConfig';

function App() {
  return (
    <AuthProvider>
      <QuestProvider
        apiKey={questConfig.APIKEY}
        entityId={questConfig.ENTITYID}
        apiType="PRODUCTION"
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/get-started" element={<GetStarted />} />
            </Routes>
          </main>
          <FloatingFeedback />
          <HelpHub />
          <Footer />
        </div>
      </QuestProvider>
    </AuthProvider>
  );
}

export default App;