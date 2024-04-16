import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const BlogPage = () => {
  return (
    <div className="container my-5">
      <header>
        <h1>Welcome to My Blog</h1>
      </header>

      <main>
        <Carousel>
        <Carousel.Item>
  <div className="d-flex justify-content-center align-items-center bg-primary text-white" style={{ height: '1000px', padding: '40px' }}>
    <div className="text-center">
      <h2> Blog No1: Welcome to My Portfolio!</h2>
      <p>Hello and welcome to my portfolio website! I'm excited to share with you my journey as a passionate full stack developer. This platform serves as a showcase of my skills, projects, and experiences in the ever-evolving world of web development.</p>
      <p>As a full stack developer, I possess a diverse skill set that encompasses both the frontend and backend aspects of web development. I am proficient in creating intuitive and visually appealing user interfaces using technologies like HTML, CSS, and JavaScript frameworks such as React. On the backend, I specialize in building robust and scalable server-side applications using languages like Node.js, Python, or Ruby on Rails. My expertise extends to working with databases, RESTful APIs, and deploying applications to the cloud. Being a full stack developer allows me to take a holistic approach to web development, ensuring seamless integration between the frontend and backend components.</p>
      <p>Throughout this portfolio, you will find a collection of my notable projects that demonstrate my technical capabilities and problem-solving skills. From responsive web designs to complex web applications, each project represents a unique challenge that I have tackled with creativity and dedication. I believe in writing clean, maintainable, and efficient code while following industry best practices. Additionally, I have included blog posts where I share my thoughts, insights, and tips on various topics related to web development. Feel free to explore my work, read about my experiences, and get a glimpse into my passion for creating meaningful digital solutions. If you have any questions or would like to collaborate on a project, please don't hesitate to reach out. Thank you for visiting my portfolio, and I look forward to connecting with you!</p>
    </div>
  </div>
</Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center bg-secondary text-white" style={{ height: '1000px', padding:'40px' }}>
              <div className="text-center">
                <h2>Benefits of the Pomodoro Technique for People with ADHD</h2>
                <p>The Pomodoro Technique is a time management method that can be particularly helpful for individuals with Attention Deficit Hyperactivity Disorder (ADHD). This technique involves breaking work into short, focused intervals called "pomodoros," typically lasting 25 minutes, followed by a short break. After completing four pomodoros, a longer break is taken.</p>
                <p>One of the primary benefits of the Pomodoro Technique for people with ADHD is that it helps to combat procrastination and improve focus. By working in short bursts and taking regular breaks, individuals with ADHD can maintain their attention and motivation, reducing the likelihood of getting distracted or feeling overwhelmed by a task.</p>
                <p>Moreover, the structured nature of the Pomodoro Technique provides a sense of accomplishment and progress, as each completed pomodoro represents a small victory. This positive reinforcement can boost self-esteem and motivation, making it easier to tackle larger projects or tasks that may initially seem daunting.</p>
                <p>Another advantage of the Pomodoro Technique is that it encourages individuals with ADHD to prioritize tasks and manage their time more effectively. By breaking down work into manageable chunks, it becomes easier to estimate the time required for each task and plan accordingly. This can help reduce stress and anxiety associated with time management and deadlines.</p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center bg-success text-white" style={{ height: '1000px', padding:'40px' }}>
              <div className="text-center">
                <h2>The Very Basics of Programming</h2>
                <p>Programming is the process of creating instructions that tell a computer how to perform a specific task. It involves writing code in a programming language, which is then interpreted or compiled by the computer to execute the desired actions. Programming is essential for developing software, websites, mobile apps, and various other technological solutions.</p>
                <p>To get started with programming, one needs to choose a programming language. Some popular languages for beginners include Python, JavaScript, and Java. Each language has its own syntax and rules, but they all share fundamental concepts such as variables, data types, control structures (if-else statements and loops), and functions.</p>
                <p>Variables are used to store and manipulate data in a program. They act as containers that hold values, which can be numbers, strings (text), or other data types. Control structures allow programmers to control the flow of execution based on certain conditions. For example, an if-else statement can be used to execute different code blocks depending on whether a condition is true or false.</p>
                <p>Functions are reusable blocks of code that perform specific tasks. They help in organizing and modularizing code, making it more readable and maintainable. Functions can take input parameters and return output values, allowing for code reusability and abstraction.</p>
                <p>Learning programming requires practice and persistence. It involves problem-solving skills, logical thinking, and attention to detail. As one gains more experience and knowledge, they can tackle more complex programming challenges and build increasingly sophisticated applications.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </main>

      <footer className="mt-5">
        <p>&copy; 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;
