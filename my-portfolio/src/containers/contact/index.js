import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsEnvelope } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeader";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
          window.alert("Failed to send message. Please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsEnvelope size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__content__form"
          >
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="user_name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="user_name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="user_email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="user_email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="message" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
