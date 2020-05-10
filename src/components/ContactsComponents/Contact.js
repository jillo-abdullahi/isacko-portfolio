import React from "react";
import LinkButtons from "./LinkButtons";
import Form from "./Form";

const Contact = (props) => {
  return (
    <div className="container contacts-content">
      <div className="contacts-text">
        <p>Please feel free to contact me for any work or suggestions.</p>
      </div>
      <div className="row">
        <div className="col-md-6 contacts-image">
          <div className="image-envelope"></div>

          <div className="external-contact-links">
            <LinkButtons />
          </div>
        </div>
        <div className="col-md-6 contacts-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
