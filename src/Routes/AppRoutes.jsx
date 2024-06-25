import { Routes, Route } from "react-router-dom"
import HomePage from "./../pages/Homepage/Homepage"
import Candles from "./../pages/CandlesPage/CandlesPage"
import Contact from "./../pages/ContactPage/ContactPage"
import SignupPage from "./../pages/SignUpPage/SignUpPage"
import NewCandle from "./../pages/NewCandlePage/NewCandlePage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/candles" element={<Candles />} />
      <Route path="/candles/new-candle" element={<NewCandle />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default AppRoutes
