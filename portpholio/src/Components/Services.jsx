import React from 'react';

export default function Services() {
  return (
    <div className="container">
      {/* Frontend Section */}
      <div className="frontend">
        <h1>Frontend Development Services</h1>
        <p>
          We specialize in creating visually stunning and highly functional frontend solutions that engage users and provide seamless experiences across all devices.
        </p>
        <div className="service-box">
          <h3>Responsive Web Design</h3>
          <p>Ensure that your website works flawlessly on all screen sizes, from desktop to mobile.</p>
        </div>
        <div className="service-box">
          <h3>Single Page Applications (SPA)</h3>
          <p>Develop dynamic and responsive single-page applications that provide a native app-like experience within the browser.</p>
        </div>
        <div className="creative-button">Learn More</div>
      </div>

      {/* Backend Section */}
      <div className="backend">
        <h2>Backend Development Services</h2>
        <p>
          Our backend services provide robust, scalable, and secure server-side solutions to support your web applications.
        </p>
        <div className="service-box">
          <h3>API Development</h3>
          <p>Design and build RESTful APIs for seamless communication between frontend and backend systems.</p>
        </div>
        <div className="service-box">
          <h3>Authentication & Authorization</h3>
          <p>Implement secure login, user registration, and role-based access control to protect sensitive data and manage user permissions.</p>
        </div>
        <div className="creative-button">Learn More</div>
      </div>
    </div>
  );
}
