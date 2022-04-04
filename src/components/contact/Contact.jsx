import { useContext } from "react";
import { ThemeContext } from "../../context";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "portfolio_template",
        e.target,
        process.env.REACT_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="left">
          <h2>Contact Me</h2>
          <p>
            Send me a message and I will get back to you as soon as I can.
            Thanks!
          </p>
        </div>
        <div className="right">
          <form onSubmit={sendEmail}>
            <input
              className="name"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="name"
              required
            ></input>
            <input
              className="email"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="subject"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />
            <textarea
              className="message"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
