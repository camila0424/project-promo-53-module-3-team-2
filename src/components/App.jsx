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
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "https://placecats.com/millie/300/150",
    photo: "https://placecats.com/millie/300/150"
    
  });

  const changeToAnotherState = (field, value) => {
    /*const fieldMap = {
      name: "proyect",
      slogan: "slogan",
      repo: "repository",
      demo: "demo",
      technologies: "technologies",
      desc: "description",
      autor: "nameAuthor",
      job: "work",
    };

    const key = fieldMap[field];*/
    if (field) {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    fetch("https://dev.adalab.es/api/projectCard/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
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
            job={formData.job}
            autor={formData.autor}
            name={formData.name}
            slogan={formData.slogan}
            repo={formData.repo}
            desc={formData.desc}
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
