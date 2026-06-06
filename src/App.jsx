import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ClassesPage from './pages/ClassesPage';
import SchedulePage from './pages/SchedulePage';
import ReservePage from './pages/ReservePage';
import ContactPage from './pages/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="classes" element={<ClassesPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="reserve" element={<ReservePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
