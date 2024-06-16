import leftPic from "./../images/candles-home.webp"
import rightPic from "./../images/candles-relax.jpg"
import handmade from "./../images/handmade-candle.avif"
import "./Homepage.css"

function Homepage() {
  return (
    <div className="HomePage">
      <section className="first-part">
        <div className="left">
          <img src={leftPic} alt="relaxing-home" className="left-pic" />
        </div>
        <div className="right">
          <h1 className="title-homepage">Hygge Lights</h1>
          <h2 className="subtitle-homepage">Relax and recharge.</h2>
          <img src={rightPic} alt="candles" className="right-pic" />
        </div>
      </section>
      <section className="second-part">
        <div>
          <h2>Eco-Friendly and Natural Ingredients</h2>
          <article className="characteristics">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 76.77"
              width="85"
              height="85"
              fill="#C88EA7"
              className="svg-hover"
            >
              <path d="M69.93,14a7,7,0,0,1,2,.28,6.6,6.6,0,0,1,1.29.53V13.63A6.68,6.68,0,0,1,73.7,11a6.93,6.93,0,0,1,1.49-2.23A6.77,6.77,0,0,1,77.42,7.3,6.69,6.69,0,0,1,80,6.77h0a6.76,6.76,0,0,1,2,.32,6.86,6.86,0,0,1,1.36.6V6.85A6.92,6.92,0,0,1,84,4.23,7,7,0,0,1,85.46,2h0A6.74,6.74,0,0,1,87.68.52,6.83,6.83,0,0,1,90.29,0a6.85,6.85,0,0,1,4.84,2,7,7,0,0,1,1.49,2.23,6.73,6.73,0,0,1,.52,2.62v.86a7.11,7.11,0,0,1,1.33-.57,6.71,6.71,0,0,1,4.63.22,6.86,6.86,0,0,1,4.24,6.33V44.13q.06.4.09.81a7.87,7.87,0,0,1,0,.84v1.09c.72-.68,1.39-1.35,1.84-1.8l.41-.4A10.28,10.28,0,0,1,113.86,42a7,7,0,0,1,4.35-.05,6.18,6.18,0,0,1,1.56.73,6.07,6.07,0,0,1,1.31,1.11,6.65,6.65,0,0,1,1,1.43,6.83,6.83,0,0,1,.6,1.62,8,8,0,0,1-.4,4.81,11.83,11.83,0,0,1-3.19,4.4l-.07.07c-.75.75-1.75,1.83-2.93,3.09-4.93,5.29-12.89,13.81-18,15.86-4.14,1.65-10.48,2.1-16.41,1.29-5.3-.72-10.3-2.45-13.15-5.25l2.55-2.53c2.32,2.25,6.64,3.65,11.26,4.24,5.3.67,11,.28,14.41-1.09,4.53-1.8,12.92-10.86,17.4-15.67,1-1.09,1.81-1.95,2.34-2.49l.17-.17.05,0a8.23,8.23,0,0,0,2.14-2.83,4.5,4.5,0,0,0,.33-2.85,3.9,3.9,0,0,0-.29-.79,3.53,3.53,0,0,0-.46-.68h0a3,3,0,0,0-.58-.49,2.83,2.83,0,0,0-.7-.34h0a3.66,3.66,0,0,0-2.34.11,7.21,7.21,0,0,0-2.5,1.7c-.42.43-1.57,1.57-2.71,2.64-.57.54-1.15,1.07-1.69,1.5a9.79,9.79,0,0,1-1.22.89,1.56,1.56,0,0,1-.47.22,1.75,1.75,0,0,1-.51.08.31.31,0,0,1-.17-.05l-1.15-.56a.32.32,0,0,1-.18-.27l-.35-5.87c0-5.78,0-10.91,0-16,0-5.45,0-10.92,0-16.06a3.19,3.19,0,0,0-.24-1.24,3.42,3.42,0,0,0-.71-1.05,3.3,3.3,0,0,0-1-.71,3.38,3.38,0,0,0-1.24-.24,3.32,3.32,0,0,0-2.29.95,3.27,3.27,0,0,0-1,2.29V39.3a.32.32,0,0,1-.32.32H93.85a.32.32,0,0,1-.32-.32V6.86a3.19,3.19,0,0,0-.25-1.24,3,3,0,0,0-.7-1,3.19,3.19,0,0,0-1.06-.71,3.1,3.1,0,0,0-1.23-.24,3.19,3.19,0,0,0-1.24.24,3.42,3.42,0,0,0-1,.71,3.3,3.3,0,0,0-.71,1,3.19,3.19,0,0,0-.24,1.24V39.3a.32.32,0,0,1-.32.32H86A15.9,15.9,0,0,0,84,36.22c-.24-.33-.5-.65-.77-1V13.63A3.38,3.38,0,0,0,83,12.39a3.42,3.42,0,0,0-.71-1.05A3.27,3.27,0,0,0,80,10.39a3.27,3.27,0,0,0-1.24.25,3.25,3.25,0,0,0-2,3v17a16.49,16.49,0,0,0-3.61-1V20.86a3.14,3.14,0,0,0-.25-1.23,3.32,3.32,0,0,0-.7-1.06,3.26,3.26,0,0,0-1.06-.7,3.14,3.14,0,0,0-1.23-.25,3.19,3.19,0,0,0-1.24.25,3,3,0,0,0-1,.7,3.19,3.19,0,0,0-.71,1.06,3.14,3.14,0,0,0-.24,1.23v9.07a13.94,13.94,0,0,0-3.61,1.41V20.86a6.87,6.87,0,0,1,4.24-6.33A6.77,6.77,0,0,1,69.93,14ZM61.24,41c2.57-2.68,4.37-5,8.32-5.44,7.42-.85,14.25,6.74,10.5,14.22a33.05,33.05,0,0,1-5.64,7.15c-2.64,2.73-5.55,5.41-7.6,7.44l-5.57,5.53-4.61-4.44C51.1,60.1,42.06,53.38,41.76,45.06c-.2-5.83,4.4-9.57,9.69-9.5,4.73.06,6.72,2.41,9.79,5.41ZM51,14.29A7,7,0,0,1,53,14a6.77,6.77,0,0,1,2.62.52,6.86,6.86,0,0,1,4.24,6.33v10.9a13.43,13.43,0,0,0-3.62-1.6v-9.3a3.14,3.14,0,0,0-.24-1.23,3.19,3.19,0,0,0-.71-1.06,3,3,0,0,0-1-.7,3.24,3.24,0,0,0-3.51.69h0a3.27,3.27,0,0,0-1,2.29v8.77a16.8,16.8,0,0,0-3.61.76V13.63a3.24,3.24,0,0,0-5.53-2.29,3.42,3.42,0,0,0-.71,1.05,3.38,3.38,0,0,0-.24,1.24V34.54a14.48,14.48,0,0,0-3,5.08h-.45a.32.32,0,0,1-.32-.32V6.86a3.19,3.19,0,0,0-.24-1.24,3.3,3.3,0,0,0-.71-1,3.42,3.42,0,0,0-1-.71,3.19,3.19,0,0,0-1.24-.24,3.1,3.1,0,0,0-1.23.24,3.19,3.19,0,0,0-1.06.71,3.48,3.48,0,0,0-.7,1v0a3.19,3.19,0,0,0-.25,1.24V39.31a.32.32,0,0,1-.32.32H26a.32.32,0,0,1-.32-.32V13.71a3.19,3.19,0,0,0-.25-1.24,3,3,0,0,0-.69-1v0a3.18,3.18,0,0,0-1-.7h0a3.18,3.18,0,0,0-1.23-.25,3.38,3.38,0,0,0-1.24.24,3.3,3.3,0,0,0-1,.71,3.42,3.42,0,0,0-.71,1.05,3.19,3.19,0,0,0-.24,1.24c0,5.14,0,10.61,0,16.06,0,5.11,0,10.24,0,16l-.35,5.87a.34.34,0,0,1-.18.27l-1.15.56a.31.31,0,0,1-.17,0,1.75,1.75,0,0,1-.51-.08,1.84,1.84,0,0,1-.47-.22A9.1,9.1,0,0,1,15,51.35c-.54-.43-1.12-1-1.69-1.49-1.14-1.08-2.29-2.22-2.71-2.65a7.07,7.07,0,0,0-2.5-1.7,3.63,3.63,0,0,0-2.35-.12,2.67,2.67,0,0,0-.7.34,2.84,2.84,0,0,0-.59.5h0a3.53,3.53,0,0,0-.46.68,3.9,3.9,0,0,0-.29.79,4.5,4.5,0,0,0,.33,2.85,8.23,8.23,0,0,0,2.14,2.83l0,0,.17.17c.53.53,1.34,1.4,2.34,2.48,4.47,4.82,12.87,13.87,17.41,15.68,3.45,1.37,9.11,1.76,14.41,1.09,4.43-.57,8.58-1.87,11-4l.95.89,1.66,1.6c-2.89,2.66-7.75,4.32-12.91,5-5.93.81-12.27.36-16.42-1.29-5.13-2-13.09-10.57-18-15.86C5.61,58,4.61,56.89,3.86,56.14l-.07-.07A11.83,11.83,0,0,1,.6,51.67a8,8,0,0,1-.4-4.81,7.07,7.07,0,0,1,.6-1.63,6.84,6.84,0,0,1,1-1.42A6.07,6.07,0,0,1,3.11,42.7,6.58,6.58,0,0,1,4.67,42,7.12,7.12,0,0,1,9,42a10.28,10.28,0,0,1,4.14,2.65l.41.4c.45.45,1.12,1.12,1.84,1.8V45.78a7.87,7.87,0,0,1,0-.84q0-.4.09-.81V13.7a6.87,6.87,0,0,1,4.24-6.33,6.68,6.68,0,0,1,4.62-.22,6.92,6.92,0,0,1,1.34.57V6.86a6.73,6.73,0,0,1,.52-2.62A7,7,0,0,1,27.75,2,6.82,6.82,0,0,1,37.4,2h0a7,7,0,0,1,1.49,2.23,6.92,6.92,0,0,1,.52,2.62v.84a6.86,6.86,0,0,1,1.36-.6,6.76,6.76,0,0,1,2.05-.32h0a6.69,6.69,0,0,1,2.61.53A6.87,6.87,0,0,1,49.18,11a6.68,6.68,0,0,1,.52,2.61v1.19A6.6,6.6,0,0,1,51,14.29Z" />
            </svg>
            <div className="info">
              <h3>Handmade</h3>
              <p>
                Crafted with care by artisans, ensuring unique, high-quality
                candles.
              </p>
            </div>
          </article>
          <article className="characteristics">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 118.05 122.88"
              width="80"
              height="80"
              fill="#C88EA7"
              className="svg-hover"
            >
              <path d="M66,38.09q.06.9.18,1.71v.05c1,7.08,4.63,11.39,9.59,13.81,5.18,2.53,11.83,3.09,18.48,2.61,1.49-.11,3-.27,4.39-.47l1.59-.2c4.78-.61,11.47-1.48,13.35-5.06,1.16-2.2,1-5,0-8a38.85,38.85,0,0,0-6.89-11.73A32.24,32.24,0,0,0,95,21.46,21.2,21.2,0,0,0,82.3,20a23.53,23.53,0,0,0-12.75,7,15.66,15.66,0,0,0-2.35,3.46h0a20.83,20.83,0,0,0-1,2.83l-.06.2,0,.12A12,12,0,0,0,66,37.9l0,.19Zm26.9-3.63a5.51,5.51,0,0,1,2.53-4.39,14.19,14.19,0,0,0-5.77-.59h-.16l.06.51a5.57,5.57,0,0,0,2.89,4.22,4.92,4.92,0,0,0,.45.24ZM88.62,28l.94-.09a13.8,13.8,0,0,1,8,1.43,7.88,7.88,0,0,1,3.92,6.19l0,.43a.78.78,0,0,1-.66.84A19.23,19.23,0,0,1,98,37a12.92,12.92,0,0,1-6.31-1.44A7.08,7.08,0,0,1,88,30.23a10.85,10.85,0,0,1-.1-1.44.8.8,0,0,1,.69-.78ZM14.15,10c-.06-5.86,3.44-8.49,8-9.49C26.26-.44,31.24.16,34.73.7A111.14,111.14,0,0,1,56.55,6.4a130.26,130.26,0,0,1,22,10.8,26.25,26.25,0,0,1,3-.78,24.72,24.72,0,0,1,14.83,1.69,36,36,0,0,1,13.09,10.42,42.42,42.42,0,0,1,7.54,12.92c1.25,3.81,1.45,7.6-.23,10.79-2.77,5.25-10.56,6.27-16.12,7l-1.23.16a54.53,54.53,0,0,1-2.81,12.06A108.62,108.62,0,0,1,91.3,84v25.29a9.67,9.67,0,0,1,9.25,10.49c0,.41,0,.81,0,1.18a1.84,1.84,0,0,1-1.84,1.81H86.12a8.8,8.8,0,0,1-5.1-1.56,10.82,10.82,0,0,1-3.35-4,2.13,2.13,0,0,1-.2-.46L73.53,103q-2.73,2.13-5.76,4.16c-1.2.8-2.43,1.59-3.69,2.35l.6.16a8.28,8.28,0,0,1,5.07,4,15.38,15.38,0,0,1,1.71,7.11V121a1.83,1.83,0,0,1-1.83,1.83h-53c-2.58.09-4.47-.52-5.75-1.73A6.49,6.49,0,0,1,9.11,116v-11.2a42.61,42.61,0,0,1-6.34-11A38.79,38.79,0,0,1,1.11,70.29,37,37,0,0,1,13.6,50.54l.1-.09a41.08,41.08,0,0,1,11-6.38c7.39-2.9,17.93-2.77,26-2.68,5.21.06,9.34.11,10.19-.49a4.8,4.8,0,0,0,1-.91,5.11,5.11,0,0,0,.56-.84c0-.26,0-.52-.07-.78a16,16,0,0,1-.06-4.2,98.51,98.51,0,0,0-18.76-3.68c-7.48-.83-15.44-1.19-23.47-1.41l-1.35,0c-2.59,0-4.86,0-7.46-1.67A9,9,0,0,1,8,23.68a9.67,9.67,0,0,1-.91-5A10.91,10.91,0,0,1,8.49,14a8.74,8.74,0,0,1,3.37-3.29A8.2,8.2,0,0,1,14.15,10ZM69.14,22a54.75,54.75,0,0,1,4.94-3.24,124.88,124.88,0,0,0-18.8-9A106.89,106.89,0,0,0,34.17,4.31C31,3.81,26.44,3.25,22.89,4c-2.55.56-4.59,1.92-5,4.79a134.49,134.49,0,0,1,26.3,3.8,115.69,115.69,0,0,1,25,9.4ZM64,28.65c.21-.44.42-.86.66-1.28a15.26,15.26,0,0,1,1.73-2.47,146.24,146.24,0,0,0-14.92-6.2,97.69,97.69,0,0,0-15.34-4A123.57,123.57,0,0,0,21.07,13.2c-3.39-.08-6.3.08-7.47.72a5.21,5.21,0,0,0-2,1.94,7.3,7.3,0,0,0-1,3.12,6.1,6.1,0,0,0,.55,3.11,5.43,5.43,0,0,0,2,2.21c1.73,1.09,3.5,1.1,5.51,1.12h1.43c8.16.23,16.23.59,23.78,1.42a103.41,103.41,0,0,1,19.22,3.76,17.84,17.84,0,0,1,.85-2Zm-.76,15.06-.21.16c-1.82,1.3-6.48,1.24-12.35,1.17C42.91,45,32.79,44.83,26,47.47a37.41,37.41,0,0,0-10,5.81l-.1.08A33.44,33.44,0,0,0,4.66,71.17a35.14,35.14,0,0,0,1.5,21.32A39.47,39.47,0,0,0,12.35,103a1.82,1.82,0,0,1,.42,1.16v12a3.05,3.05,0,0,0,.68,2.37,4.28,4.28,0,0,0,3.16.73H67.68a10,10,0,0,0-1.11-3.69,4.7,4.7,0,0,0-2.87-2.32,15.08,15.08,0,0,0-4.4-.38h-26a1.83,1.83,0,0,1-.15-3.65c5.73-.72,10.35-2.74,13.57-6.25,3.06-3.34,4.91-8.1,5.33-14.45v-.13A18.88,18.88,0,0,0,46.35,75a20.22,20.22,0,0,0-7.41-4.42,23.54,23.54,0,0,0-8.52-1.25c-4.7.19-9.11,1.83-12,4.83a1.83,1.83,0,0,1-2.65-2.52c3.53-3.71,8.86-5.73,14.47-6a27.05,27.05,0,0,1,9.85,1.44,24,24,0,0,1,8.74,5.23,22.48,22.48,0,0,1,6.85,15.82v.08a2.17,2.17,0,0,1,0,.36c-.47,7.25-2.66,12.77-6.3,16.75a21.24,21.24,0,0,1-4.62,3.77H57.35q4.44-2.39,8.39-5c2.68-1.79,5.22-3.69,7.63-5.67a1.82,1.82,0,0,1,2.57.24,1.69,1.69,0,0,1,.35.66L81,115.62a7,7,0,0,0,2.16,2.62,5.06,5.06,0,0,0,3,.9H96.88a6.56,6.56,0,0,0-1.68-4.38,7.19,7.19,0,0,0-4.74-1.83c-.36,0-.69,0-1,0a1.83,1.83,0,0,1-1.83-1.83V83.6a1.75,1.75,0,0,1,.23-.88,105.11,105.11,0,0,0,5.34-12.46,52,52,0,0,0,2.55-10.44l-1.23.1c-7.23.52-14.52-.12-20.34-3A20,20,0,0,1,63.26,43.71Z" />
            </svg>
            <div className="info">
              <h3>Cruelty Free</h3>
              <p>
                Produced without animal testing, aligning with ethical
                standards.
              </p>
            </div>
          </article>
          <article className="characteristics">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 118.05 122.88"
              width="80"
              height="80"
              fill="#C88EA7"
              className="svg-hover"
            >
              <path d="M95.79,7.52a225.35,225.35,0,0,0-29.63,8.55c-1.23.46-2.46.94-3.67,1.43-.42,3.1-1,6.14-1.63,9.18a86.35,86.35,0,0,0-2,14.2l1.29-1.36a2,2,0,0,1,.2-.21A297.61,297.61,0,0,1,95.79,7.52ZM66.59,81.05c-13.23,6.26-25.2,6.41-36.21,6.56l-2.94,0q-3.61,5.16-7.14,10.52a2.61,2.61,0,0,1-.19.27l-1.36,2.08c2.15-.41,4.23-.75,6.32-1.1,9.71-1.63,19.47-3.26,35.32-11a91.53,91.53,0,0,0,6.2-7.39ZM31,82.58c12.58-.16,26.48-.53,41.94-10.94,1.36-2.25,2.65-4.53,3.89-6.85-6.6,2-14.36,2.86-22.1,3.7-5,.54-10,1.08-14.64,2-1.28,1.63-2.55,3.29-3.81,5a2,2,0,0,1-.24.33q-2.53,3.38-5,6.84ZM11.21,103l.12-.19c1.31-2.07,2.64-4.12,4-6.15-2.16-5.92-2.45-14-2.72-21.72-.1-2.94-.2-5.85-.41-8.54q-1.39,3.56-2.52,7.22a108.92,108.92,0,0,0-4.38,39q2.94-4.87,5.94-9.59Zm37.7-4.22a120.81,120.81,0,0,1-23,5.6c-3.57.6-7.14,1.2-10.94,2.07-2.12,3.37-4.22,6.78-6.31,10.26,17-4,30-10.2,40.27-17.93ZM16,57.9c1.15,4.67,1.37,10.69,1.58,16.87.2,5.72.41,11.6,1.38,16.35q2.51-3.7,5.05-7.33l.1-.13h0q3.55-5.06,7.19-9.91c-1.95-5.31-1.57-14.29-1.2-23.09.19-4.55.38-9,.24-12.81A82.32,82.32,0,0,0,16,57.9ZM35,33.47c.61,4.7.34,11,.08,17.37S34.57,64,35.21,68.6l1.43-1.84h0a2.34,2.34,0,0,1,.24-.31q6.3-8,12.83-15.53c1.43-1.64,2.86-3.26,4.31-4.86-.82-6.78.54-13.57,1.91-20.37.39-2,.78-3.91,1.11-5.84A94,94,0,0,0,35,33.47Zm9.71,31.15c3.1-.43,6.29-.78,9.49-1.12,9.62-1,19.26-2.09,26-5.38,2.7-5.63,5.16-11.4,7.54-17.22C80.92,42.7,74.47,43,67.9,43.33c-1.53.08-3.07.15-4.75.26q-4.89,5.16-9.67,10.63-4.41,5.07-8.73,10.4ZM59.06,13.49l.3-.12c1.67-.69,3.35-1.36,5-2C78.15,6.23,92.94,2.78,107.06,0a2.55,2.55,0,0,1,1.68.27,2.51,2.51,0,0,1,1,3.4C104.06,14.09,99.55,25.23,95.07,36.3c-15.2,37.55-30.19,74.56-91,86.54l-.14,0a2.52,2.52,0,0,1-2.83-2.15,114.16,114.16,0,0,1,3.8-48.55,101,101,0,0,1,6.2-15.59l0,0,0-.06h0a87,87,0,0,1,16.8-23.28c.88-.86,1.79-1.7,2.72-2.52l0,0c8.09-7.15,17.83-12.69,28.38-17.11Zm9.24,24.8c7.27-.36,14.39-.77,21.9-3.37l.21-.5c3.32-8.2,6.65-16.43,10.51-24.48A287.56,287.56,0,0,0,68.3,38.29Z" />
            </svg>
            <div className="info">
              <h3>Vegan</h3>
              <p>
                Made with plant-based ingredients, avoiding all animal-derived
                substances.
              </p>
            </div>
          </article>
          <article className="characteristics">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 43.53 122.88"
              width="80"
              height="80"
              fill="#C88EA7"
              className="svg-hover"
            >
              <g>
                <path
                  class="st0"
                  d="M16.68,0c16.94,14.54,26.8,34.81,14.4,51.6c3.52,0.61,6.5,1.56,8.64,2.74c2.4,1.32,3.8,2.98,3.8,4.86l0,0.08 c0-0.03,0.01-0.05,0.02-0.08v49.99C43.53,127.65,0,127.2,0,109.31V59.19c0,0.03,0.01,0.05,0.02,0.08l0-0.08 c0-1.83,1.33-3.45,3.62-4.76c2-1.14,4.79-2.07,8.09-2.7C-3.86,31.7,21.34,9.83,16.68,0L16.68,0z M29.97,53.01 c-1.7,2.06-3.75,4.07-6.18,6v1.76c0,0.94-0.81,1.7-1.8,1.7c-1,0-1.8-0.76-1.8-1.7V43.34c0-0.94,0.81-1.7,1.8-1.7 c1,0,1.8,0.76,1.8,1.7v15.58C35.76,48.46,30.84,32.79,20.92,23c2.99,6.31-18.76,23.02-1.26,36.16c-2.74-1.97-4.96-3.98-6.75-6.01 c-0.04,0.02-0.08,0.03-0.13,0.04c-3.54,0.61-6.51,1.56-8.57,2.73c-1.81,1.03-2.85,2.16-2.85,3.28c0,1.68,2.18,3.3,5.7,4.56 c3.75,1.34,8.96,2.18,14.72,2.18c5.76,0,10.97-0.83,14.72-2.18c3.52-1.26,5.7-2.88,5.7-4.56c0-1.16-1.11-2.33-3.01-3.38 c-2.17-1.19-5.29-2.15-8.98-2.73C30.11,53.07,30.04,53.05,29.97,53.01L29.97,53.01z"
                />
              </g>
            </svg>
            <div className="info">
              <h3>Paraffin Free</h3>
              <p>
                Uses soy wax for a cleaner, healthier burn and environmental
                sustainability.
              </p>
            </div>
          </article>
        </div>
        <div className="img">
          <img src={handmade} alt="handmade-candles" className="handmade-pic" />
        </div>
      </section>
      <section className="third-part">
        <h2>Products</h2>
      </section>
      <section className="fourth-part">
        <article>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 505 511.9"
            width="60"
            height="60"
            fill="#C88EA7"
            className="svg-hover"
          >
            <path d="m336.11 39.84-115.38 68.95 135.38 18.39 111.32-69.44-131.32-17.9zm26.7 205.06c73.73 0 133.5 59.77 133.5 133.5 0 73.73-59.77 133.5-133.5 133.5-73.73 0-133.49-59.77-133.49-133.5 0-73.73 59.76-133.5 133.49-133.5zm-11.93 68.58c-.05 2.21.32 3.27 2.24 3.27h29.61c8.38.67 15.89 2.89 22.23 7.17 4.39 2.99 7.62 8.55 10.04 12.47 4.29 6.97 6.73 17.05 8.05 25.17.56 3.51.82 6.81.21 8.32-.27.72-.72 1.21-1.27 1.43-3.18 1.27-6.56-3.1-8.35-5.2-8.53-9.98-20.94-14.11-35.56-14.89h-25.64c-1.52.26-2.06 1.38-1.9 3.11v11.91c-.09 3.97-2.09 5.32-6.05 3.98l-36.43-28.59-3.59-2.82-.92-.72c-2.92-2.63-1.72-7.02.91-9.09l2.78-2.18 34.92-27.49c4.25-3.35 8.72-4.26 8.72 2.97v11.18zm23.87 129.85c.04-2.22-.32-3.29-2.24-3.29h-29.62c-8.38-.66-15.89-2.88-22.22-7.17-4.41-2.99-7.66-8.58-10.08-12.53-4.38-7.16-7.27-18.84-8.32-27.21-.32-2.66-.38-5.01.08-6.21.28-.71.74-1.21 1.3-1.43 3.17-1.27 6.54 3.11 8.33 5.2 8.54 9.98 20.95 14.11 35.57 14.89h25.64c1.51-.26 2.05-1.38 1.9-3.11v-11.91c.09-3.96 2.08-5.31 6.05-3.98l36.43 28.59 3.58 2.82.91.72c2.94 2.63 1.73 7.02-.9 9.09l-2.78 2.18-34.91 27.49c-4.26 3.35-8.72 4.26-8.72-2.97v-11.17zm-169.92-317.2-.09 141.71-51.45-35.04-51.46 29.07 6.1-148.91-88.54-12.03v312.98l178.95 23.14c2.52 7.09 5.47 13.98 8.85 20.62L9.3 432.08c-5.17-.21-9.3-4.48-9.3-9.69V89.86c.27-4.05 1.89-6.89 5.72-8.81L182.47.85c1.58-.72 3.53-1.01 5.26-.76l308.18 42.03c5.09.59 8.58 4.77 8.58 9.99v.02L505 280.9c-5.72-8.46-15.57-20.29-19.93-27.77V69.56l-115.81 74.93v59.81a174.577 174.577 0 0 0-19.39.36v-58.82l-145.04-19.71zm-81.52-30.58 112.17-69.43-47.58-6.49L44.24 84.8l79.07 10.75z" />
          </svg>
          <div>
            <h3>Free Easy Returns</h3>
            <p>Return to 7 days.</p>
          </div>
        </article>
        <article>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 122.88 74.34"
            width="60"
            height="60"
            fill="#C88EA7"
            className="svg-hover"
          >
            <style type="text/css"></style>
            <g>
              <path
                class="st0"
                d="M94.42,18.73l-17.98-0.1V6.53c0-1.8-0.73-3.43-1.92-4.61C73.34,0.73,71.71,0,69.91,0H20.07 c-1.8,0-3.43,0.73-4.61,1.92c-1.18,1.18-1.92,2.81-1.92,4.61c0,0.98,0.79,1.77,1.77,1.77c0.98,0,1.77-0.79,1.77-1.77 c0-0.82,0.34-1.57,0.88-2.11c0.54-0.54,1.29-0.88,2.11-0.88h49.84c0.82,0,1.57,0.34,2.11,0.88c0.54,0.54,0.88,1.29,0.88,2.11v55.41 h-9.98c-0.98,0-1.77,0.79-1.77,1.77c0,0.98,0.79,1.77,1.77,1.77h11.75c0.98,0,1.77-0.79,1.77-1.77v-2.01h10.68 c0.81-18.42,27.26-20.96,29.95,0h5.81l-1.79-19.22l-19.07-7.3L94.42,18.73L94.42,18.73z M2.65,37.54c-1.47,0-2.65-0.8-2.65-1.78 c0-0.98,1.19-1.78,2.65-1.78h23.89c1.47,0,2.65,0.8,2.65,1.78c0,0.98-1.19,1.78-2.65,1.78H2.65L2.65,37.54z M8.12,27.96 c-1.1,0-1.99-0.79-1.99-1.77c0-0.98,0.89-1.77,1.99-1.77h18.43c1.1,0,1.99,0.79,1.99,1.77c0,0.98-0.89,1.77-1.99,1.77H8.12 L8.12,27.96z M10.65,18.38c-1.1,0-1.99-0.79-1.99-1.77c0-0.98,0.89-1.77,1.99-1.77h15.89c1.1,0,1.99,0.79,1.99,1.77 c0,0.98-0.89,1.77-1.99,1.77H10.65L10.65,18.38z M26.46,61.93c0.98,0,1.77,0.79,1.77,1.77c0,0.98-0.79,1.77-1.77,1.77h-6.39 c-1.79,0-3.42-0.78-4.61-2.01c-1.18-1.23-1.92-2.91-1.92-4.69v-13c0-0.98,0.79-1.77,1.77-1.77c0.98,0,1.77,0.79,1.77,1.77v13 c0,0.85,0.35,1.66,0.92,2.25c0.54,0.56,1.27,0.92,2.06,0.92H26.46L26.46,61.93z M44.46,50.37c-6.62,0-11.99,5.37-11.99,11.99 c0,6.62,5.37,11.99,11.99,11.99c6.62,0,11.99-5.37,11.99-11.99C56.44,55.74,51.08,50.37,44.46,50.37L44.46,50.37z M44.46,57.75 c-2.54,0-4.61,2.06-4.61,4.61c0,2.54,2.06,4.61,4.61,4.61c2.54,0,4.61-2.06,4.61-4.61C49.06,59.81,47,57.75,44.46,57.75 L44.46,57.75z M102.06,50.37c-6.62,0-11.99,5.37-11.99,11.99c0,6.62,5.37,11.99,11.99,11.99s11.99-5.37,11.99-11.99 C114.05,55.74,108.68,50.37,102.06,50.37L102.06,50.37z M102.06,57.75c-2.54,0-4.61,2.06-4.61,4.61c0,2.54,2.06,4.61,4.61,4.61 s4.61-2.06,4.61-4.61C106.67,59.81,104.61,57.75,102.06,57.75L102.06,57.75z M89.79,23.81l-8.93-0.1V35.2h14.97L89.79,23.81 L89.79,23.81z"
              />
            </g>
          </svg>
          <div>
            <h3>Free delivery</h3>
            <p>Orders over €80</p>
          </div>
        </article>
        <article>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 118.21"
            width="60"
            height="60"
            fill="#C88EA7"
            className="svg-hover"
          >
            <title>24-hours-phone-support</title>
            <path d="M45.34,6.14a4,4,0,0,0,3.23,7.24,67.7,67.7,0,0,1,7.19-3.1c4.54-1.51,3-8.5-2-7.67a44.76,44.76,0,0,0-8.4,3.53Zm7.34,52.75V52.68L62,43.16a18.79,18.79,0,0,0,1.49-1.65,7.68,7.68,0,0,0,1-1.49,3.46,3.46,0,0,0,.34-1.5,2.67,2.67,0,0,0-.32-1.39,1.79,1.79,0,0,0-1-.78,5.09,5.09,0,0,0-1.71-.24H53.16V29.9c1.32-.3,2.79-.57,4.42-.83a37.53,37.53,0,0,1,5.66-.38,13.09,13.09,0,0,1,5.58,1,5.76,5.76,0,0,1,2.91,2.86,11.06,11.06,0,0,1,.86,4.63,11.53,11.53,0,0,1-.52,3.59,11.3,11.3,0,0,1-1.51,3,21.45,21.45,0,0,1-2.4,2.82L63,51.87H73.4v7Zm36,0V53.36H76.24l-1.37-3.43,8.67-21h8L84.19,46.75H88.7V42.31l1.49-3.87h6.33v8.31h2.42v5.4l-2.42,1.21v5.53ZM29.91,54.57A90.17,90.17,0,0,0,43.23,73.24,76,76,0,0,0,64.35,88.82a2.13,2.13,0,0,0,1.82.09,7.76,7.76,0,0,0,2.54-1.85A28.38,28.38,0,0,0,71,84.22c3.39-4.46,7.59-10,13.52-7.23l.36.19,19.77,11.37.2.13a8.94,8.94,0,0,1,3.71,7.7,20.84,20.84,0,0,1-2.89,9.8,20.15,20.15,0,0,1-9.52,8.41,43.45,43.45,0,0,1-11.73,3.19,39.68,39.68,0,0,1-17.92-1.5,79.12,79.12,0,0,1-18-8.7l-.45-.29c-2.94-1.82-6.1-3.78-9.19-6.09-11.38-8.57-22.94-21-30.47-34.57C2.08,55.19-1.37,42.84.52,31.08c1-6.45,3.81-12.32,8.63-16.2,4.2-3.39,9.87-5.24,17.21-4.59a2.46,2.46,0,0,1,2,1.27L41,33a6.7,6.7,0,0,1,1.07,7.17,14.09,14.09,0,0,1-4.85,5.44c-.69.59-1.5,1.17-2.35,1.79-2.83,2.05-6.06,4.43-4.95,7.24l0-.07Zm78.77,21.65A4,4,0,0,0,115,80.94a4.54,4.54,0,0,0,.52-.7,45.31,45.31,0,0,0,3.56-7.95,4,4,0,0,0-7.1-3.46,4.31,4.31,0,0,0-.4.84,38.33,38.33,0,0,1-2.91,6.55Zm6.15-21.07a4,4,0,0,0,7.77,1.49,4.24,4.24,0,0,0,.15-.79,50.62,50.62,0,0,0-.12-8.7,4,4,0,0,0-7.81-.58,4.42,4.42,0,0,0-.1,1.41,40.94,40.94,0,0,1,.11,7.17Zm-3.92-21.22a4,4,0,0,0,7.24-3.28,51.17,51.17,0,0,0-4.21-7.51,4,4,0,1,0-6.58,4.46,43.63,43.63,0,0,1,3.55,6.33ZM97.36,17.07c4.17,3.05,9-3,4.78-6.35a53.9,53.9,0,0,0-7.27-4.59C90.79,4,86.82,9.57,90.49,12.71a4.16,4.16,0,0,0,.71.47,45.31,45.31,0,0,1,6.16,3.89Zm-20-8.52A4,4,0,0,0,79.7,1a4.08,4.08,0,0,0-1-.31A57,57,0,0,0,70.11,0a4,4,0,1,0,0,8,49.17,49.17,0,0,1,7.27.6Z" />
          </svg>
          <div>
            <h3>All Day Support</h3>
            <p>24/7 Support care</p>
          </div>
        </article>

        <article>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 111.811 122.88"
            width="60"
            height="60"
            fill="#C88EA7"
            className="svg-hover"
          >
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M55.713,0c20.848,13.215,39.682,19.467,55.846,17.989 c2.823,57.098-18.263,90.818-55.63,104.891C19.844,109.708-1.5,77.439,0.083,17.123C19.058,18.116,37.674,14.014,55.713,0L55.713,0 z M33.784,66.775c-1.18-1.01-1.318-2.786-0.309-3.967c1.011-1.181,2.787-1.318,3.967-0.309l11.494,9.875l25.18-27.684 c1.047-1.15,2.828-1.234,3.979-0.188c1.149,1.046,1.233,2.827,0.187,3.978L51.262,78.188l-0.002-0.002 c-1.02,1.121-2.751,1.236-3.91,0.244L33.784,66.775L33.784,66.775z M55.735,7.055c18.454,11.697,35.126,17.232,49.434,15.923 c2.498,50.541-16.166,80.39-49.241,92.846C23.986,104.165,5.091,75.603,6.493,22.211C23.29,23.091,39.768,19.46,55.735,7.055 L55.735,7.055z"
              />
            </g>
          </svg>
          <div>
            <h3>Secure Checkout</h3>
            <p>100% protected by Paypal</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Homepage
