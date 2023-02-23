import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Nav from './components/Nav'
import TicketPage from './pages/TicketPage'

function App() {
  return (
    <div className="app">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/ticket/:id" element={<TicketPage editMode={true}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
