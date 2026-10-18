import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout';
import ErrorBoundary from './ErrorBoundary';

// Public Pages
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Academics = lazy(() => import('./Pages/Academics'));
const Admissions = lazy(() => import('./Pages/Admissions'));
const CampusLife = lazy(() => import('./Pages/CampusLife'));
const News = lazy(() => import('./Pages/News'));
const VideoPlayer = lazy(() => import('./Pages/VideoPlayer'));
const Contact = lazy(() => import('./Pages/Contact'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./Pages/TermsOfService'));
const NotFound = lazy(() => import('./Pages/NotFound'));

// Admin Pages
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

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center py-20" aria-live="polite" aria-busy="true">
      <div className="w-10 h-10 border-2 border-[var(--color-ink)]/15 border-t-[var(--color-flamingo-deep)] rounded-full animate-spin mb-4" />
      <span className="text-xs uppercase tracking-widest text-[var(--color-muted)] font-semibold">
        Loading...
      </span>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/campuslife" element={<Navigate to="/campus-life" replace />} />
              <Route path="/news" element={<News />} />
              <Route path="/videos" element={<VideoPlayer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />

              {/* Admin Routes */}
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

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;