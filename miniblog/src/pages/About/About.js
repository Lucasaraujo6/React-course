import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  const mystyle = {
    width: "100%",
    height: "90vh",
    display: "block",
  };

  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no Back-end
      </p>
      <Link to="/posts/create" className="btn ">
        Criar Post
      </Link>
      {/* <div>
        <object
          type="text/html"
          style={mystyle}
          data="http://www.bbc.com/"
        ></object>
      </div>
      <div>
        <iframe
          src="https://www.adorocinema.com/filmes/filme-10568/"
          scrolling="yes"
          frameborder="no"
        ></iframe>
      </div> */}
    </div>
  );
};

export default About;
