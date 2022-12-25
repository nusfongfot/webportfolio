import CardUs from "../components/CardUs"
import Slide from "react-reveal/Slide"
import { DiMongodb } from "react-icons/di"
import { SiExpress } from 'react-icons/si';
import '../App.css'

function Projects() {
  return (
    <div className="container-fluid" id="projects">
      <div className="title-service d-flex align-items-center justify-content-center overflow-hidden">
        <Slide bottom>Projects</Slide>
      </div>

      <div className="row overflow-hidden d-flex m-0 flex-column d-sm-flex flex-sm-column align-items-sm-center justify-content-sm-center gap-4 mb-5 d-xxl-flex flex-xxl-row d-xl-flex flex-xl-row d-lg-flex flex-lg-row">
        <Slide bottom>
          <div className="overflow-hidden d-flex justify-content-center flex-column gap-4 d-sm-flex flex-sm-column d-md-flex flex-md-column align-items-md-center d-d-lg-flex flex-lg-wrap flex-lg-row d-xl-flex flex-xl-row">
            <CardUs
              title="Final Project(MERN Stack)"              
              iconReact="fa-brands fa-react"
              iconNode="fa-brands fa-node"
              iconExpress={<SiExpress />}
              iconMogo={<DiMongodb />}
              link="https://elitemove-nus-weld.vercel.app"
              code="https://github.com/JSD3G6/frontend_subgroupB"
            />
            <CardUs
              title="Airbnb Clone"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              link="https://nusfongfot.github.io/basic-airbnbclone-/"
              code="https://github.com/nusfongfot/basic-airbnbclone-"
            />

            <CardUs
              title="Currency Exchange Rate"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              link="https://nusfongfot.github.io/currencyapi/"
              code="https://github.com/nusfongfot/currencyapi"
            />
          </div>
        </Slide>

        <Slide bottom>
          <div className="overflow-hidden d-flex justify-content-center flex-column gap-4 d-sm-flex flex-sm-column d-md-flex flex-md-column align-items-md-center d-d-lg-flex flex-lg-wrap flex-lg-row d-xl-flex flex-xl-row">
            <CardUs
              title="Reserving-Moive"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              link="https://nusfongfot.github.io/reserving-moive/"
              code="https://github.com/nusfongfot/reserving-moive"
            />
            <CardUs
              title="Accounting-Records"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              link="https://nusfongfot.github.io/accounting-records/"
              code="https://github.com/nusfongfot/accounting-records"
            />
            <CardUs
              title="Calculator"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              link="https://nusfongfot.github.io/calculator-js-/"
              code="https://github.com/nusfongfot/calculator-js-"
            />
          </div>
        </Slide>

        <Slide bottom>
          <div className="overflow-hidden d-flex justify-content-center flex-column gap-4 d-sm-flex flex-sm-column d-md-flex flex-md-column align-items-md-center d-d-lg-flex flex-lg-wrap flex-lg-row d-xl-flex flex-xl-row">
            <CardUs
              title="CountDown-Mybirthday"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              iconReact="fa-brands fa-react"
              link="https://nusfongfot.github.io/countdown-mybd/"
              code="https://github.com/nusfongfot/countdown-mybd"
            />
            <CardUs
              title="Pokemon-ClickInfo"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              iconReact="fa-brands fa-react"
              link="https://nusfongfot.github.io/poke-click/"
              code="https://github.com/nusfongfot/poke-click"
            />
            <CardUs
              title="Todo-App"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              iconReact="fa-brands fa-react"
              link="https://nusfongfot.github.io/todo-app/"
              code="https://github.com/nusfongfot/todo-app"
            />
          </div>
        </Slide>

        <Slide bottom>
          <div className="overflow-hidden d-flex justify-content-center flex-column gap-4 d-sm-flex flex-sm-column d-md-flex flex-md-column align-items-md-center d-d-lg-flex flex-lg-wrap flex-lg-row d-xl-flex flex-xl-row">
            <CardUs
              title="SearchUser-Api"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              iconReact="fa-brands fa-react"
              link="https://nusfongfot.github.io/searchuser-api/"
              code="https://github.com/nusfongfot/searchuser-api"
            />
            <CardUs
              title="XO-Game"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              iconReact="fa-brands fa-react"
              link="https://nusfongfot.github.io/x-o-game/"
              code="https://github.com/nusfongfot/x-o-game"
            />
            <CardUs
              title="Weather-Api"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              iconReact="fa-brands fa-react"
              link="https://nusfongfot.github.io/weather-api/"
              code="https://github.com/nusfongfot/weather-api"
            />
          </div>
        </Slide>
        <Slide bottom>
          <div className="overflow-hidden d-flex justify-content-center flex-column gap-4 d-sm-flex flex-sm-column d-md-flex flex-md-column align-items-md-center d-d-lg-flex flex-lg-wrap flex-lg-row d-xl-flex flex-xl-row">
            <CardUs
              title="Create-Store"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              iconReact="fa-brands fa-react"
              link="https://nusfongfot.github.io/createStore/"
              code="https://github.com/nusfongfot/createStore"
            />
            <CardUs
              title="Spotify-Search(api)"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              iconReact="fa-brands fa-react"
              link="https://nusfongfot.github.io/spottify-search-/"
              code="https://github.com/nusfongfot/spottify-search-"
            />
            <CardUs
              title="Pokemon-Api(Full)"
              iconHtml="fa-brands fa-html5"
              iconCss="fa-brands fa-css3-alt"
              iconJs="fa-brands fa-js"
              iconReact="fa-brands fa-react"
              link="https://nusfongfot.github.io/fullpokeapi/"
              code="https://github.com/nusfongfot/fullpokeapi"
            />
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Projects
