import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const ProjectCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to="/projects">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', backgroundColor: '#ff6347' }}>
            <Carousel.Caption>
              <h3>Projects</h3>
              <p>
                Explore the projects I have worked on and see if there's anything you'd like adapted for your own personal site or app.
              </p>
            </Carousel.Caption>
          </div>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/blog">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', backgroundColor: '#6495ed' }}>
            <Carousel.Caption>
              <h3>Blog</h3>
              <p>
                Stay up-to-date with my latest insights, tutorials, and industry-related news through my informative blog. Explore a wide range of topics and discover valuable knowledge.
              </p>
            </Carousel.Caption>
          </div>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/AboutMe">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', backgroundColor: '#9acd32' }}>
            <Carousel.Caption>
              <h3>About Me</h3>
              <p>
                Learn more about my background, experience, and passion for technology. Discover what drives me and how I approach each project with dedication and creativity.
              </p>
            </Carousel.Caption>
          </div>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <a href="https://www.linkedin.com/in/brad-ogden-1a3a79102/" target="_blank" rel="noopener noreferrer">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', backgroundColor: '#ffa07a' }}>
            <Carousel.Caption>
              <h3>Let's Connect</h3>
              <p>
                Interested in collaborating or discussing potential opportunities? Let's connect on LinkedIn and explore how we can work together.
              </p>
            </Carousel.Caption>
          </div>
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProjectCarousel;