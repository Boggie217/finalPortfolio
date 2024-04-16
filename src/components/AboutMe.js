import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = () => {
  return (
    <div className="container my-5">
      <h2>About Me</h2>

      <div className="row">
        <div className="col-md-12">
          <section style={{height:'80vh', paddingTop:'20vh'}} className="about-section overflow-auto"> {/* Added overflow-auto */}
            <h3>From Languages to Code</h3>
            <p>
              After studying <strong> a Degree in Spanish </strong>, I've embarked on an exciting journey into the world of <strong>technology</strong>. My love for <strong>languages</strong> has naturally transitioned into a passion for <strong>computer languages</strong> and the recent revelation of <strong>AI </strong> has changed the way people learn new things. From exploring the intricacies of <strong>programming</strong> to delving into the mysteries of <strong>machine learning</strong>, I find immense joy in unraveling the complexities that power our digital world.
            </p>
          </section>

          <section style={{height:'80vh', paddingTop:'20vh'}} className="about-section overflow-auto"> {/* Added overflow-auto */}
            <h3>The World of GameDev</h3>
            <p>
              Additionally, my <strong>curiosity</strong> extends to the captivating realm of <strong>game development</strong>, where I revel in the art of crafting <strong>immersive virtual experiences</strong> that blur the lines between reality and imagination. With each line of code and every design decision, I strive to 
              <strong> push the boundaries</strong> of what's possible, constantly seeking new ways to <strong>merge</strong> my linguistic background with cutting-edge technologies.
            </p>
          </section>

          <section style={{height:'80vh', paddingTop:'20vh'}} className="about-section overflow-auto"> {/* Added overflow-auto */}
            <h3>A Passion for Innovation</h3>
            <p>
              In this ever-evolving landscape, I am driven by a <strong>thirst for knowledge</strong> and a desire to <strong>innovate</strong>. Whether <strong>exploring new programming paradigms</strong>, <strong>developing intelligent systems</strong>, or <strong>crafting engaging interactive experiences</strong>, I approach each challenge with <strong>creativity</strong> and <strong>determination</strong>, fueled by a genuine passion for <strong>continuous learning</strong> and <strong>problem-solving</strong>.
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default AboutMe;