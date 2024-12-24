import { useForm } from "../hooks/useForm";

export const CallToActionTwoForm = () => {
  const { formControl, onInputChange } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formControl;

  return (
    <>
      <form
        action="forms/contact.php"
        method="post"
        className="php-email-form"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="row gy-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required=""
              value={name}
              onChange={onInputChange}
            />
          </div>
          <div className="col-md-6 ">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              required=""
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
              required=""
              value={subject}
              onChange={onInputChange}
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              name="message"
              rows="6"
              placeholder="Message"
              required=""
              value={message}
              onChange={onInputChange}
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
