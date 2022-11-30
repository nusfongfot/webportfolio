import '../App.css'

function Card({ title, iconHtml, iconCss, iconJs, iconReact, link, code }) {
  return (
    <div className="col col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3 d-flex justify-content-center">
      <div className="card-content">
        <div className="icon-service">
          <i className={iconHtml}></i>
          <i className={iconCss}></i>
          <i className={iconJs}></i>
          <i className={iconReact}></i>
        </div>

        <div className="detail-service">
          <b>{title}</b>
          <b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            ea similique libero vel cumque nulla ratione, delectus sed ipsam
            inventore quia aliquid.
          </b>
        </div>

        <div>
          <button className="about-btn">
            <a href={code} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </button>
          <button className="about-btn">
            <a href={link} target="_blank" rel="noreferrer">
              Watch Now
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
