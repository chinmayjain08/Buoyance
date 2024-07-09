import './Contact.css'
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaMobile } from "react-icons/fa";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contactContainer">
      <div className="cont_left">
        <p className="c_h1">Let&apos;s Build Something Great Together</p>
        <p className="c_h2">Reach out to us today and let&apos;s start your project!</p>
        <div className="cont_left_links">
          <a className='mailLink' href=""> contact@Buoyance.com <FaArrowRightLong /></a>
          <a className='phoneLink' href=""><FaMobile /></a>
        </div>
      </div>

      <div className="cont_right">
        <p className="c_h1">Connect with Us</p>
        <p className="cont_right_h2 ">Follow us on social media to stay updated with our latest projects, news, and events.</p>

        <div className="sMedia_links">
          <a href=""><CiInstagram /></a>
          <a href=""><CiLinkedin /></a>
          <a href=""><PiWhatsappLogoThin /></a>
        </div>
      </div>




    </section>
  )
}

export default Contact