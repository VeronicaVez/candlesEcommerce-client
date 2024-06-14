import leftPic from "./../images/candles-home.webp"
import rightPic from "./../images/candles-relax.jpg"
import "./Homepage.css"

function Homepage() {
  return (
    <div className="HomePage">
      <sector className="first-part">
        <div className="left">
          <img src={leftPic} alt="relaxing-home" className="left-pic" />
        </div>
        <div className="right">
          <h1 className="title-homepage">Hygge Lights</h1>
          <h2 className="subtitle-homepage">Relax and recharge.</h2>
          <img src={rightPic} alt="candles" className="right-pic" />
        </div>
      </sector>
      <sector className="second-part"></sector>
    </div>
  )
}

export default Homepage
