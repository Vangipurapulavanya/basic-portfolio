import './Home.css';

export default function Home() {
  return (
    <div className="i" id='Home'>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name">Lavanya</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">MERN Stack</div>
              <div className="i-title-item">Frontend Developer </div>
              <div className="i-title-item">Backend Developer </div>
              <div className="i-title-item">Full Stack Developer </div>
            </div>
          </div>
          <div className="i-desc">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.

          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
      </div>
    </div>
  )
}
