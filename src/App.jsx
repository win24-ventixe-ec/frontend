import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Events from './pages/Events';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Event from './pages/Event';
import Bookings from './pages/Bookings';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<Event />} />
        <Route path="/bookings" element={<Bookings />} />
      </Route>
    </Routes>
  );
}

export default App;
