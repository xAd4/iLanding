import { useForm } from "../hooks/useForm";

export const CallToActionTwoForm = () => {
  const { formControl, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formControl;

  // Consuming the API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formControl),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        onResetForm();
      } else {
        const errorData = await response.json();
        alert(`Error: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sent form.");
    }
  };

  return (
    <>
      <form
        action="forms/contact.php"
        method="post"
        className="php-email-form"
        data-aos="fade-up"
        data-aos-delay="200"
        onSubmit={handleSubmit}
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
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
