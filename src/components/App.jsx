import "../styles/App.scss";
import "../images/icons/github.svg";
import iconLaptop from "../images/laptop-code-solid.svg";
import logoAdalab from "../images/adalab.png";
import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Preview from "./preview/Preview";
import Card from "./preview/Card";
import Form from "./Form/Form";
import Footer from "./Footer";

function App() {
  const [proyect, setProyect] = useState("");
  const [slogan, setSlogan] = useState("");
  const [repository, setRepo] = useState("");
  const [demo, setDemo] = useState("");
  const [technologies, setTecnoligies] = useState("");
  const [description, setDescription] = useState("");
  const [nameAuthor, setNameAuthor] = useState("");
  const [work, setWork] = useState("");

  const changeToAnotherState = (field, value) => {
    console.log(field, value);
    if (field === "name") {
      setProyect(value);
    } else if (field === "slogan") {
      setSlogan(value);
    } else if (field === "repo") {
      setRepo(value);
    } else if (field === "demo") {
      setDemo(value);
    } else if (field === "technologies") {
      setTecnoligies(value);
    } else if (field === "desc") {
      setDescription(value);
    } else if (field === "autor") {
      setNameAuthor(value);
    } else if (field === "job") {
      setWork(value);
    }
  };

  return (
    <div className="container">
      <Header iconLaptop={iconLaptop} logoAdalab={logoAdalab} />

      <main className="main">
        <Hero />

        <section className="preview">
          <Preview changeToAnotherState={changeToAnotherState} />
          <Card
            work={work}
            nameAuthor={nameAuthor}
            proyect={proyect}
            slogan={slogan}
            repository={repository}
            description={description}
            technologies={technologies}
            demo={demo}
          />
        </section>

        <Form changeToAnotherState={changeToAnotherState} />
      </main>
      <Footer logoAdalab={logoAdalab} />
    </div>
  );
}

export default App;
