import CandleList from "./../../components/CandleList/CandleList"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Link } from "react-router-dom"
import "./CandlesPage.css"

const CandlesPage = () => {
  const { isLoggedIn, user } = useContext(AuthContext)

  return (
    <div className="candles-page">
      <h1> Our candles</h1>
      <CandleList />
      <div className="newcandle-button">
        {isLoggedIn && user.role === "admin" ? (
          <Button as={Link} to="/candles/new-candle" className="button-class">
            Add New Candle
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default CandlesPage
