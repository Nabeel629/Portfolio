import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted!");
    };

    return (<>
         <div className="top-heading">
        <h1 >Contact Me</h1>
        <p>I'd love to hear from you.</p>
      </div>
        <div className="contact-wrapper">

  <div className="contact-container">

    {/* LEFT SIDE — CONTACT INFO */}
    <div className="contact-info">
        <h3>Contact</h3>
      <h2>Let's work
<br/><span>together</span></h2>
 <p>
       Ready to scale your agency or build your dream store? Let's discuss how I can help.



      </p>
      <p>📍 Lahore, Pakistan</p>
      <p>📧 nabeel@example.com</p>
      <p>📞 +92 300 1234567</p>

     
    </div>

    {/* RIGHT SIDE — FORM */}
    <div className="contact-card">
      <form onSubmit={handleSubmit} className="contact-form">

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Type your message"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>

  </div>
</div>

        </>
    );
}

export default Contact;
