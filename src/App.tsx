import './App.css';
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import Layout from './Layout';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Academics from './Pages/Academics';
import Admissions from './Pages/Admissions';
import CampusLife from './Pages/CampusLife';
// import Faculty from './Pages/Faculty';
import Home from './Pages/Home';
import News from './Pages/News';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Layout>
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;