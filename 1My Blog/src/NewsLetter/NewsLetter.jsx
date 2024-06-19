import React, { useState, useEffect } from "react";
import "./newsletter.css";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [hasAgreedToToc, setHasAgreedToToc] = useState(false);
  const [disableSubmitButton, setDisableSubmitButton] = useState(true);

  function toggleDisableSubmitButton() {
    if (!email || hasAgreedToToc === false) setDisableSubmitButton(true);
    else setDisableSubmitButton(false);
  }

  useEffect(() => {
    toggleDisableSubmitButton();
  }, [email, hasAgreedToToc]);

  return (
    <div className="newsletter-section">
      <form role="form" className="newsletter-form">
        <div className="newsletter-form__group">
          <input
            type="email"
            name=""
            value={email}
            placeholder="your email address"
            className="newsletter-form__input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="newsletter-form__group">
          <input
            type="checkbox"
            name=""
            id="toc-agreement"
            value={hasAgreedToToc}
            checked={hasAgreedToToc}
            onChange={(_) => setHasAgreedToToc(!hasAgreedToToc)}
          />
          <label htmlFor="toc-agreement">i agree to terms and conditions</label>
        </div>
        <button
          className="newsletter-form__submit-button"
          disabled={disableSubmitButton}
        >
          join newsletter
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
