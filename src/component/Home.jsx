
import './Home.css';
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="typewriter">Hi, I'm Priya Kumari</h1>

          <h2 className='typewriter'>Full Stack Developer</h2>
          <h2 className='typewriter'> Currently Working As a Associate Software Engineer</h2>
          <p>
            I build beautiful and responsive web applications using React.Js,Node.Js,ExpressJs,MongoDB, HTML, CSS, and JavaScript. Passionate about clean code and user experience.
          </p>
          
          
        <div className="download-button">
  <a href="/cvvvvvvPriya.pdf" download>Download CV</a>
</div>

        </div>

        <div className="home-image">
          <img src="/src/assets/images/Priyaa.jpg" alt="Priya Kumari" />
        </div>
      </div>
    </section>
  );
};

export default Home;
