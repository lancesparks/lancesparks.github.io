import classes from "./Contact.module.css";
import landscape from "../../assets/landscape.jpg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = (
    name: string,
    email: string,
    subject: string,
    message: string
  ) => {
    const messageStr = `From: ${name} - ${email}%0D%0A%0D%0A${message}`;
    window.open(
      `mailto:lancehsparks@gmail.com?subject=${subject}&body=${messageStr}`
    );
  };

  return (
    <section className={classes.contact} id="contact">
      <div className={classes.contactLeft}>
        <img className={classes.contactLeftImg} src={landscape} alt="" />
        <div className={classes.contactLeftOverlay}></div>
      </div>
      <div className={classes.contactRight}>
        <div className={classes.contactForm}>
          <h1 className="headingXLarge">Contact Me</h1>

          <div className={classes.myContact}>
            <div className={classes.myContactSection}>
              <span className={classes.myContactSectionIcon}>
                <PersonOutlineIcon />
              </span>
              <p>Lance Sparks</p>
            </div>

            <div className={classes.myContactSection}>
              <span className={classes.myContactSectionIcon}>
                <MailOutlineIcon />
              </span>
              <p>LanceHSparks@gmail.com</p>
            </div>

            <div className={classes.myContactSection}>
              <span className={classes.myContactSectionIcon}>
                <PhoneIcon />
              </span>
              <p>386-523-4350</p>
            </div>

            <div className={classes.myContactSection}>
              <span className={classes.myContactSectionIcon}>
                <PlaceIcon />
              </span>
              <p>Orlando, FL</p>
            </div>
          </div>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e: any) => setSubject(e.target.value)}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Enter Messsage"
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
          ></textarea>
          <button
            className={classes.submitBtn}
            onClick={() => handleContact(name, email, subject, message)}
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
