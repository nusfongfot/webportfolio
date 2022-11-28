import meImg from '../images/myimg_2.jpg'
import Slide from 'react-reveal/Slide'

function Aboutme() {
  return (
    <div className="container-fluid about" id="about">
      <div className="row">
        <div className="col-md-4">
        <Slide left>
          <img className="img-about img-fluid" src={meImg} alt="" />
        </Slide>
        </div>

        <div className="col-md-8">
          <div className="about-align">
          <Slide right>
            <div className="text-white">About Me</div>
            <div className="color-head">I'am a student.</div>
            <div>
              สวัสดีครับ ผมชื่อสรวิศ กองศรีมา(นัส) นะครับ
              ผมจบคณะการบัญชีและการจัดการ มหาวิทยาลัยมหาสารคาม
              ผมมีความสนใจในสายงาน Web developer มากครับ ผมอยากเขียนโปรแกรมเก่งๆ
              และอยากทำงานด้านนี้มากๆครับ ผมเป็นคนที่ชื่นชอบและรักในการเรียนรู้
              เกี่ยวกับการเขียนโปรแกรมครับและเป็นคนที่พร้อมที่จะพัฒนาตัวเองอยู่ตลอดครับ
              เพื่อเพิ่มประสิทธิภาพในการทำงาน และเพิ่มศักยภาพในตัวเองครับ
            </div>
            <div>
              <button className="about-btn">
                <a href="#contact">Let's Talk</a>
              </button>
            </div>
          </Slide>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme