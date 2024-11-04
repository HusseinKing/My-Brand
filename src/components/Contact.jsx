import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import img from "../assets/images/contact-img.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS credentials
    const serviceID = 'service_rr73wrs';
    const templateID = 'template_yhw118j';
    const publicKey = '1BY5GcDg91o_kWr8D';

    const templateParams = {
      from_name: `${formData.name} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_name: 'Hussein', // The name you want to receive emails as
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setStatus('success');
        setFormData({
          name: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => setStatus(''), 3000);
      })
      .catch((error) => {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      });
  };

  return (
    <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
      <div className="wrapper flex justify-center py-16 gap-52 lg:py-12">
        <div className="imgbox lg:hidden">
          <img className="w-[550px] h-full" src={img} alt="" />
        </div>
        <div className="content-box">
          <h1 className="text-white font-bold text-4xl">Get In Touch</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex gap-4 py-2">
              <input
                className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="flex gap-4 py-4">
              <input
                className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
            </div>
            <textarea
              className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            ></textarea>
            <button
              className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold disabled:opacity-50"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
            {status === 'success' && (
              <p className="text-green-400">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;