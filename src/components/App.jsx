import "../styles/App.scss";
import "../images/icons/github.svg";
import iconLaptop from "../images/laptop-code-solid.svg";
import logoAdalab from "../images/adalab.png";
import { useState , useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Preview from "./preview/Preview";

import Form from "./Form/Form";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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
    image: "",
    photo: "",
  });
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData)); // convertimos de texto a objeto
    }
  }, []);

  const changePhoto = (uploadedPhoto) => {
    setFormData({
      ...formData,
      photo: uploadedPhoto,
    });
  };

  const changeImage = (uploadedImage) => {
    setFormData({
      ...formData,
      image: uploadedImage,
    });
  };
  const changeToAnotherState = (field, value) => {
    if (field) {
      setFormData({
        ...formData,
        [field]: value,
      });
      localStorage.setItem("formData",JSON.stringify(setFormData));
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

      <Link to="/" className="btnBack">
        Volver a inicio
      </Link>

      <main className="main">
        <Hero />

        <Preview
          formData={formData}
          changeToAnotherState={changeToAnotherState}
        />

        <Form
          changeToAnotherState={changeToAnotherState}
          handleSubmit={handleSubmit}
          changePhoto={changePhoto}
          changeImage={changeImage}
        />
      </main>
      <Footer logoAdalab={logoAdalab} />
    </div>
  );
}

export default App;
