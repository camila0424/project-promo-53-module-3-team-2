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
  const [formData, setFormData] = useState({
    proyect: "",
    slogan: "",
    repository: "",
    demo: "",
    technologies: "",
    description: "",
    nameAuthor: "",
    work: "",
  });

  const changeToAnotherState = (field, value) => {
    const fieldMap = {
      name: "proyect",
      slogan: "slogan",
      repo: "repository",
      demo: "demo",
      technologies: "technologies",
      desc: "description",
      autor: "nameAuthor",
      job: "work",
    };

    const key = fieldMap[field];
    if (key) {
      setFormData({
        ...formData,
        [key]: value,
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    fetch("https://dev.adalab.es/api/projectCard/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((dataResponse) => {
        console.log(dataResponse);
      });
  };

  return (
    <div className="container">
      <Header iconLaptop={iconLaptop} logoAdalab={logoAdalab} />

      <main className="main">
        <Hero />

        <section className="preview">
          <Preview changeToAnotherState={changeToAnotherState} />
          <Card
            work={formData.work}
            nameAuthor={formData.nameAuthor}
            proyect={formData.proyect}
            slogan={formData.slogan}
            repository={formData.repository}
            description={formData.description}
            technologies={formData.technologies}
            demo={formData.demo}
          />
        </section>

        <Form
          changeToAnotherState={changeToAnotherState}
          handleSubmit={handleSubmit}
        />
      </main>
      <Footer logoAdalab={logoAdalab} />
    </div>
  );
}

export default App;
