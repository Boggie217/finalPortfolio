import React from 'react';
import ProjectCarousel from './Carousel';
import ProfilePicture from './ProfilePicture.jpg';
import CV from './bradCV.pdf';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
  return (
    <div>
      <div className="container my-5">
        <section className="row align-items-center mb-5">
          <div className="col-md-8">
            <h1 className="display-4">Hello there &#128075;, I'm Brad! </h1> {/* Wave emoji added here */}
            <p className="lead" style={{ fontSize: '2rem' }}>
              Welcome to my portfolio! I'm a passionate web developer and occasional linguist based in Northern England. Explore my work and let's collaborate on exciting projects.
            </p>
            <div className="mt-4">
            <a
                href="https://www.linkedin.com/in/brad-ogden-1a3a79102/" // Replace with your LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg me-3"
              >
                Hire me
              </a>
              <a href={CV} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg me-3">
                CV
              </a>
              <Link to="/contact" className="btn btn-outline-primary btn-lg">
                Contact
              </Link>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <img
              src={ProfilePicture}
              alt=''
              className="img-fluid rounded"
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </section>
        <div className="mb-5"></div>
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default Home;