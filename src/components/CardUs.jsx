function Card({ title, iconHtml, iconCss, iconJs, iconReact, link, code }) {
  return (
    <div class="col col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3 d-flex justify-content-center">
      <div class="card-content">
        <div class="icon-service">
          <i class={iconHtml}></i>
          <i class={iconCss}></i>
          <i class={iconJs}></i>
          <i class={iconReact}></i>
        </div>

        <div class="detail-service">
          <b>{title}</b>
          <b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            ea similique libero vel cumque nulla ratione, delectus sed ipsam
            inventore quia aliquid.
          </b>
        </div>

        <div>
          <button class="about-btn">
            <a href={code} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </button>
          <button class="about-btn">
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
