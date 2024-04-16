import React from 'react';

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Contact Me</h2>
          <div className="text-center">
            <p>Thank you for your interest in contacting me!</p>
            <p>
              Please feel free to reach out to me via email at: {''}
              <a href="mailto:brad98ogden@gmail.com">brad98ogden@gmail.com</a>
            </p>
            <p>I'll get back to you as soon as possible.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
