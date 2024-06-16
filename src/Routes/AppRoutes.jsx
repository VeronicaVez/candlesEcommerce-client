import { Routes, Route } from "react-router-dom"
import HomePage from "./../pages/Homepage"
import Candles from "./../pages/CandlesPage"
import Contact from "./../pages/ContactPage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/candles" element={<Candles />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes
