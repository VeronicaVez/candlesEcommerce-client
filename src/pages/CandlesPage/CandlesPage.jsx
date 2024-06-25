import CandleList from "./../../components/CandleList/CandleList"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Link } from "react-router-dom"

const CandlesPage = () => {
  const { isLoggedIn, user } = useContext(AuthContext)

  return (
    <>
      <h1> Our candles</h1>
      <CandleList />
      {isLoggedIn && user.role === "admin" ? (
        <Button as={Link} to="/candles/new-candle">
          Add New Candle
        </Button>
      ) : null}
    </>
  )
}

export default CandlesPage
