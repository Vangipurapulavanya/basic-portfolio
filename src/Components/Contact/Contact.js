import "./Contact.css";

export default function Contact() {
  return (
    <div className="c" id="Contact">
      <div className="row">
        <div classname="c-left">
          <h1 className="c-title">Contact Me</h1>
          <p>vangipurapulavanya@gmail.com</p>
          <div className="social-icons">
            <a href="https://mail.google.com/mail/u/0/">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://linkedin.com">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="c-right">
          <form>
            <input type='text' name="Name" placeholder="Your Name" required></input>
            <input type='email' name="Email" placeholder="Your Email" required></input>
            <textarea name="message" rows='6' placeholder="Your Message"></textarea>
            <button type="submit" className="btn">Submit</button>

          </form>
        </div>
      </div>
    </div>
  );
}
