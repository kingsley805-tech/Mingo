import './App.css';
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import Layout from './Layout';
const Contact = lazy(() => import('./Pages/Contact'));
const About = lazy(() => import('./Pages/About'));
const Academics = lazy(() => import('./Pages/Academics'));
const Admissions = lazy(() => import('./Pages/Admissions'));
const CampusLife = lazy(() => import('./Pages/CampusLife'));
// const Faculty = lazy(() => import('./Pages/Faculty'));
const Home = lazy(() => import('./Pages/Home'));
const News = lazy(() => import('./Pages/News'));
const VideoPlayer = lazy(() => import('./Pages/VideoPlayer'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./Pages/TermsOfService'));
import ErrorBoundary from './ErrorBoundary';
import SchoolLoadingPage from './components/SchoolLoadingPage';
import ProtectedRoute from './admin/ProtectedRoute';
import AdminLogin from './admin/Login';
import AdminLayout from './admin/Layout';
import HomeEditor from './admin/HomeEditor';
import AboutEditor from './admin/AboutEditor';
import AcademicsEditor from './admin/AcademicsEditor';
import AdmissionsEditor from './admin/AdmissionsEditor';
import CampusLifeEditor from './admin/CampusLifeEditor';
import NewsEditor from './admin/NewsEditor';
import VideosEditor from './admin/VideosEditor';
import ContactEditor from './admin/ContactEditor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 8 seconds (8000 milliseconds) on all systems
    const loadingTime = 8000; // 8 seconds for all systems
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen for 8 seconds
  if (isLoading) {
    return <SchoolLoadingPage />;
  }

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<div style={{padding:20,textAlign:'center'}}>Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            {/* <Route path="/faculty" element={<Faculty />} /> */}
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/campuslife" element={<Navigate to="/campus-life" />} />
            <Route path="/news" element={<News />} />
            <Route path="/videos" element={<VideoPlayer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<HomeEditor />} />
              <Route path="home" element={<HomeEditor />} />
              <Route path="about" element={<AboutEditor />} />
              <Route path="academics" element={<AcademicsEditor />} />
              <Route path="admissions" element={<AdmissionsEditor />} />
              <Route path="campus-life" element={<CampusLifeEditor />} />
              <Route path="news" element={<NewsEditor />} />
              <Route path="videos" element={<VideosEditor />} />
              <Route path="contact" element={<ContactEditor />} />
            </Route>
          </Routes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;