import AppRoutes from "./Routes/AppRoutes.jsx"
import "./App.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
