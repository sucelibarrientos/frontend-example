import Navegacion from "../components/Navegacion";
import Contact from "../components/Contact";
const AboutMe = () => {
  return (
    <div className="container">
      <Contact/>
      <div className="medio">
        <h3>About <span>Me</span></h3>
        <h1>
          Im someone who finds profound joy in the art of design and <span>coding</span>
        </h1>
        <p>
          With an unwavering passion for crafting beautiful and simple
          creations, I pour my heart into every project I undertake. My work is
          a reflection of my dedication to merging aesthetics with user-centered
          functionality. With each design and code, I aim to create solutions
          that not only look pleasing but also make life easier for users.
          Welcome to my world of elegant simplicity, where every line of code
          and every pixel hold the essence of my love for what I do.
        </p>
      </div>
      <Navegacion/>
    </div>
  );
};

export default AboutMe;