import { Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';
import MainLayout from './components/MainLayout';
import Events from './pages/Events';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Event from './pages/Event';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<Event />} />
        <Route path="/events/:eventId/attendees" element={<h1>Attendees</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
