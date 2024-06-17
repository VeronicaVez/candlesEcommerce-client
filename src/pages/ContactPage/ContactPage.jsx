import contactPhoto from "./../../images/contact-photo.webp"
import "./ContactPage.css"

function ContactPage() {
  return (
    <div className="ContactPage">
      <h1>Get in touch</h1>
      <p>form + google maps</p>
      <section className="second-part">
        <img src={contactPhoto} alt="candles" className="shop-info-photo" />
        <div className="shop-info">
          <h3>Address</h3>
          <p>15077 E Alameda Pkwy, Aurora, CO 80077, USA</p>
          <h3>Email Address</h3>
          <p>contact01@hyggelights.com</p>
          <h3>Telephone </h3>
          <p>+1 (800) 888 9999 </p>
          <h3>Opening Time </h3>
          <p>Open: 8:00 AM – Close: 18:00 PM</p>
          <p>Saturday – Sunday: Close</p>
          <h3>Follow us </h3>
          <div className="icon-social-part">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 512"
              width="20"
              height="20"
              fill="#C88EA7"
              className="svg-hover"
            >
              <path
                fill-rule="nonzero"
                d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.482 47.121-.092 85.407 38.029 85.499 85.159.091 47.13-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.092c.141 72.602 59.106 131.327 131.69 131.185 72.592-.14 131.35-59.089 131.209-131.691-.141-72.577-59.114-131.336-131.715-131.194-72.585.141-131.325 59.114-131.184 131.7zm237.104-137.092c.033 16.954 13.817 30.682 30.772 30.649 16.961-.034 30.689-13.811 30.664-30.765-.033-16.954-13.818-30.69-30.78-30.656-16.962.033-30.689 13.818-30.656 30.772zm-208.696 345.4c-24.958-1.086-38.511-5.234-47.543-8.709-11.961-4.628-20.496-10.177-29.479-19.093-8.966-8.951-14.532-17.461-19.202-29.397-3.508-9.033-7.73-22.569-8.9-47.527-1.269-26.983-1.559-35.078-1.683-103.433-.133-68.338.116-76.434 1.294-103.441 1.069-24.941 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.478 8.949-8.983 17.459-14.532 29.403-19.202 9.025-3.526 22.561-7.715 47.511-8.9 26.998-1.278 35.085-1.551 103.423-1.684 68.353-.133 76.448.108 103.456 1.294 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.145 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.413 3.524 8.999 7.714 22.552 8.892 47.494 1.285 26.998 1.576 35.094 1.7 103.432.132 68.355-.117 76.451-1.302 103.442-1.087 24.957-5.226 38.52-8.709 47.56-4.629 11.953-10.161 20.488-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.56-103.448 1.684-68.338.133-76.424-.124-103.431-1.294zM149.977 1.773c-27.239 1.286-45.843 5.648-62.101 12.019-16.829 6.561-31.095 15.353-45.286 29.603C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.548 1.302 27.231 5.649 45.827 12.019 62.092 6.569 16.83 15.353 31.089 29.611 45.289 14.25 14.2 28.55 22.918 45.404 29.438 16.282 6.294 34.902 10.583 62.15 11.777 27.305 1.203 36.022 1.468 105.521 1.336 69.532-.133 78.25-.44 105.555-1.734 27.239-1.302 45.826-5.664 62.1-12.019 16.829-6.585 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.404 6.304-16.282 10.592-34.904 11.777-62.134 1.195-27.323 1.478-36.049 1.344-105.557-.133-69.516-.447-78.225-1.741-105.522-1.294-27.256-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.08-29.602-45.288-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.304-34.903-10.6-62.15-11.778C333.747.164 325.03-.101 255.506.031c-69.507.133-78.224.431-105.529 1.742z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 512"
              width="20"
              height="20"
              fill="#C88EA7"
              className="svg-hover"
            >
              <path
                fill-rule="nonzero"
                d="M0 256c0 109.29 68.5 202.6 164.91 239.32-2.35-19.99-4.84-52.95.53-76.07 4.63-19.89 29.89-126.68 29.89-126.68s-7.62-15.25-7.62-37.85c0-35.41 20.53-61.87 46.11-61.87 21.76 0 32.25 16.33 32.25 35.89 0 21.87-13.93 54.55-21.12 84.87-5.99 25.36 12.74 46.05 37.74 46.05 45.29 0 80.13-47.77 80.13-116.71 0-61.04-43.86-103.68-106.48-103.68-72.48 0-115.04 54.38-115.04 110.59 0 21.91 8.42 45.38 18.96 58.16a7.568 7.568 0 012.07 5.21c0 .7-.1 1.41-.29 2.09-1.94 8.07-6.26 25.37-7.08 28.9-1.13 4.65-3.69 5.66-8.54 3.4-31.82-14.81-51.71-61.34-51.71-98.71 0-80.41 58.4-154.22 168.36-154.22 88.41 0 157.13 63 157.13 147.18 0 87.83-55.37 158.53-132.25 158.53-25.84 0-50.09-13.45-58.41-29.3 0 0-12.78 48.68-15.88 60.59-6.01 23.13-22.7 52.39-33.04 69.01 23.84 7.36 49.14 11.3 75.38 11.3 141.38 0 256-114.63 256-256S397.38 0 256 0 0 114.62 0 256z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 640 640"
              width="20"
              height="20"
              fill="#C88EA7"
              className="svg-hover"
            >
              <path d="M633.468 192.038s-6.248-44.115-25.477-63.485c-24.366-25.477-51.65-25.642-64.123-27.118-89.493-6.52-223.904-6.52-223.904-6.52h-.236s-134.352 0-223.893 6.52c-12.52 1.523-39.768 1.63-64.123 27.118-19.24 19.37-25.358 63.485-25.358 63.485S-.012 243.806-.012 295.681v48.509c0 51.768 6.366 103.643 6.366 103.643s6.248 44.114 25.358 63.52c24.355 25.477 56.363 24.65 70.655 27.367 51.237 4.89 217.644 6.366 217.644 6.366s134.529-.237 224.022-6.638c12.52-1.477 39.756-1.63 64.123-27.119 19.24-19.37 25.476-63.532 25.476-63.532S640 396.03 640 344.154v-48.508c-.13-51.769-6.497-103.643-6.497-103.643l-.035.035zm-379.8 211.007V223.173L426.56 313.41l-172.892 89.635z" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
