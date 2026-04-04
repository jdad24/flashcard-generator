import './App.css'
import SummaryPage from './pages/summary-page'
import FlashCardPage from './pages/flashcard-page'
import NavBar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='min-h-full flex flex-col'>
        <NavBar className='mb-10'/>
        <Routes>
          <Route path="/" element={<FlashCardPage className='px-20 '/>} />
          <Route path="/summary" element={<SummaryPage className='px-20 ' />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
