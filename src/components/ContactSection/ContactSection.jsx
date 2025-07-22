// components/ContactSection.jsx
import React from 'react';
import './ContactSection.css'
const ContactSection = () => {
  const contactItems = [
    {
      link: 'tel:1256789654',
      imageSrc: 'images/phone.png',
      altText: 'Phone Icon',
      contactInfo: '+91 1256789654',
    },
    {
      link: 'mailto:priyasharma297g@gmail.com',
      imageSrc: 'images/mail.png',
      altText: 'Email Icon',
      contactInfo: 'priyasharma297g@gmail.com',
    },
    {
      link: 'https://www.google.com/maps?q=Ratlam, M.P, India',
      imageSrc: 'images/location.png',
      altText: 'Location Icon',
      contactInfo: 'Ratlam, M.P, India',
    }
  ];

  return (
    <section id="contact" className="contact-section">
      
      <h1 style={{ color: 'rgb(161, 115, 204)' }}>Contact</h1>
      <span className="textgrey">Feel free to reach out to me!</span>
      <br /><br /><br />
      <div className="contact-container">
        {contactItems.map((item, index) => (
          <div key={index} className="contact-item">
            <a href={item.link} className="contact-link">
              <img src={item.imageSrc} alt={item.altText} className="contact-icon" />
              <span className="contact-info">{item.contactInfo}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
