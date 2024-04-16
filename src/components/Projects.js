import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const imagesFolder = require.context('./images', false, /\.(png|jpe?g|gif)$/);



const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + projects.length) % projects.length);
  };


  const projects = [
    {
      id: 1,
      title: 'COMING SOON: Music App',
      longDescription:
        'Unleash your musical potential with our cutting-edge music app. Designed to empower artists, composers, and music enthusiasts, this innovative platform provides a seamless and immersive experience for creating, recording, and sharing your musical masterpieces. Stay tuned for an exciting journey into the realm of melody and harmony.',
      link: 'https://example.com/melodify',
      image: imagesFolder ('./musicApp.jpg'),
      backgroundColor: 'primary',
    }, {
      id: 2,
      title: 'COMING SOON: Serenity Wellness App',
      longDescription:
        'Embark on a transformative journey towards holistic well-being with our innovative wellness application. This comprehensive platform offers a personalized approach to health and wellness, combining expert guidance, tailored programs, and intuitive tracking tools. Unlock your full potential and achieve a balanced and fulfilling lifestyle.',
      link: 'https://example.com/serenity',
      image: imagesFolder ('./meditationtree.jpg'),
      backgroundColor: 'success',
    },
    {
      id: 3,
      title: 'COMING SOON: Unreal Landscapes',
      longDescription:
        'Explore the boundless possibilities of game development and immersive experiences with our captivating Unreal Engine projects. Crafted using the state-of-the-art Unreal Engine 5, this series of projects showcases the cutting-edge capabilities of this powerful engine, offering breathtaking visuals, engaging gameplay, and unparalleled immersion.',
      link: 'https://example.com/unreallandscapes',
      image: imagesFolder ('./gamedev.jpg'),
      backgroundColor: 'danger',
    },
    {
      id: 4,
      title: 'COMING SOON: Data Tracking',
      longDescription:
        'Prepare to unlock the power of data with our revolutionary Data Tracker app. Leveraging the latest APIs and cutting-edge technologies, this innovative solution provides real-time data tracking and analysis capabilities, empowering you to make informed decisions and stay ahead of the curve. Get ready to embark on a data-driven journey like never before.',
      link: 'https://example.com/cryptotracker',
      image: imagesFolder ('./dataAnalytics.jpg'),
      backgroundColor: 'warning',
    },
    {
      id: 5,
      title: 'COMING SOON: ArtistHub',
      longDescription:
        'ArtistHub is a collaborative platform for artists and creative professionals to showcase their work, connect with like-minded individuals, and explore new opportunities. Users can create online portfolios, participate in art challenges, and receive feedback from the community. ArtistHub also features a marketplace where artists can sell their artwork, prints, and digital products.',
      link: 'https://example.com/artisthub',
      image: imagesFolder ('./musicApp.jpg'),
      backgroundColor: 'info',
    },
    {
      id: 6,
      title: 'COMING SOON: Guitar app',
      longDescription:
        'Unleash your inner musician with our revolutionary guitar app. Whether youre a beginner or an experienced player, this powerful tool will become your ultimate companion on the path to mastering the guitar. With interactive lessons, chord libraries, and intuitive practice tools, youll have everything you need to take your guitar skills to new heights.',
      link: 'https://example.com/smarthomeiot',
      image: imagesFolder ('./guitarPicture.jpg'),
      backgroundColor: 'secondary',
    },
    {
      id: 7,
      title: 'COMING SOON: Codenation & CS50 knowledge',
      longDescription:
        'A series of code snippets and descriptions from codenation & CS50 that i have learned during my code journey',
      link: 'https://example.com/smarthomeiot',
      image: imagesFolder ('./codenationProjects.jpg'),
      backgroundColor: 'primary',
    },
    // ... (other project objects)
  ];

  return (
    <div className="container my-5">
      <h2>Here's what i'm currently working on! </h2>
      <div id="projectCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
        <div className="carousel-inner" style={{ maxHeight: '600px' }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-item ${index === activeIndex ? 'active' : ''} bg-${project.backgroundColor}`}
            >
              <div className="d-flex align-items-center justify-content-center" style={{ height: '600px' }}>
                <div className="container text-center">
                  
                  
                    <h5 className="text-white mb-3">{project.title}</h5>

                    <img src={project.image} className="d-block mx-auto mb-4" alt={project.title} style={{ maxHeight: '300px', objectFit: 'cover' }} />
                    <p className=" text-white mb-4">{project.longDescription}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light"
                    >
                      Visit Project
                    </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#projectCarousel" role="button" data-slide="prev" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#projectCarousel" role="button" data-slide="next" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;