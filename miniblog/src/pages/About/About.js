import styles from "./About.module.css";

const About = () => {
  const mystyle = {
    width: "100%",
    height: "90vh",
    display: "block",
  };

  return (
    <div>
      <h1>About</h1>
      <div>
        <object
          type="text/html"
          style={mystyle}
          data="http://www.kernel.com/"
        ></object>
      </div>
      <div>
        <iframe
          src="https://www.adorocinema.com/filmes/filme-10568/"
          scrolling="yes"
          frameborder="no"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
