import "./Skills.css";
import Frontend from "./Frontend";
import Backend from './Backend';


const Skills = () => {
  return (
    <section className="skills_section" id="skills">
      <h2 className="section_title"> Technical Skills</h2>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills;
