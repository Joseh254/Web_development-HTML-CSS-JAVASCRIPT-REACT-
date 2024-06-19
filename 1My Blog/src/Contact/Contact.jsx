import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import Title from "../Title/Title";
import "./contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitBtnDisabled, setSubmitButtonDisabled] = useState(true);
  const messageRef = useRef(null);

  function toggleSubmitButtonEnabledState() {
    if (name && email && subject && message) setSubmitButtonDisabled(false);
    else setSubmitButtonDisabled(true);
  }
  useEffect(() => {
    toggleSubmitButtonEnabledState();
  }, [name, email, subject, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="contact">
      <Title text="get in touch" />
      <form role="form" className="contact-form" onSubmit={handleSubmit}>
        <div
          className="contact-form__message"
          ref={messageRef}
          data-testid="privacy"
        >
          I keep your information private, I don't share it with anyone
          <button
            className="contact-form__btn-close-message"
            type="button"
            onClick={() =>
              messageRef.current.classList.add("contact-form__message--closed")
            }
          >
            <IoMdClose />
          </button>
        </div>
        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">
            name
          </label>
          <input
            type="text"
            id="name"
            className="contact-form__text-input"
            placeholder="full name eg john doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">
            email
          </label>
          <input
            type="email"
            id="email"
            className="contact-form__text-input"
            placeholder="email address eg johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contact-form__group">
          <label htmlFor="subject" className="contact-form__label">
            subject
          </label>
          <input
            type="text"
            id="subject"
            className="contact-form__text-input"
            placeholder="subject eg hey let's talk"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">
            message
          </label>
          <textarea
            id="message"
            className="contact-form__text-area"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          className="contact-form__submit-btn"
          disabled={submitBtnDisabled}
        >
          submit
        </button>
      </form>
    </section>
  );
};
export default Contact;
