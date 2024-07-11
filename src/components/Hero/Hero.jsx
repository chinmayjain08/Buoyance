import './Hero.css'
import { FaArrowTrendUp } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="HeroContainer">
      <p className='heroHeading1'>Transforming Ideas into Digital Realities</p>
      <p className='heroHeading2'>We build custom websites that drive business growth <FaArrowTrendUp className='FaArrowTrendUp' /> </p>
      <div className="heroBuoyance"><span>@Bu</span> <div className="oContainer"> <div className="o"></div> </div> <span>yance</span></div>
      <a href='' className='ctaBtn'>Check Out Our Work</a>

      <div className="ddd">
        <span>DESIGN</span>
        <div className='ddddot'></div>
        <span>DEVELOP</span>
        <div className='ddddot'></div>
        <span>DEPLOY</span>
      </div>
    </section>
  )
}

export default Hero