import React from 'react';

import './contact.css';

export default function Contact(props) {
  return (
    <section className="contact">
      <img className="contact-photo" src={props.photo} />
      <span className="contact-name">{props.name}</span>
      <address className="contact-address">{props.address}</address>
    </section>
  );
}
