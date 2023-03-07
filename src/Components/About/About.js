import './About.css';
import Me from "../../Assests/Images/Me.jpg";
import Resume from '../../Assests/Images/Resume.docx';
import Video from '../../Assests/Images/Video.mp4';


export default function About() {
  return (
    <div className="a" id='About'>
      <div className="a-left">
        <div className="a-card">
          <img src={Me} alt="Me" className="a-img"></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">Lavanya Vangipurapu here, hailing from Hyderabad.A full stack developer who is enthusiastic about creating distinctive and useful web applications.
I have a masters degree in HR and a bachelor's degree in IT.I have good foundation in Mongodb, HTML, CSS, and Node.js. 
Possessing effective communication and problem-solving skills as well as the ability to work effectively</p>

<a download="" href={Resume} className="a1-btn">Download CV</a>
<a download="" href={Video} className='a1-btn'>Video Resume</a>
      </div>
    </div>
  );
}
  


