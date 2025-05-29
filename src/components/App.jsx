import '../styles/App.scss';
import '../images/icons/github.svg';
import iconLaptop  from'../images/laptop-code-solid.svg';
import logoAdalab from '../images/adalab.png';
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Preview from './preview/Preview';
import Card from './preview/Card';
import Form from './Form/Form';
import Footer from './Footer';

function App() {
  const [proyect, setProyect] = useState ('');
  const [slogan, setSlogan] = useState ('');
  const [repository, setRepo] = useState ('');
  const [demo, setDemo] = useState ('');
  const [technologies, setTecnoligies] = useState ('');
  const [description, setDescription] = useState ('');
  const [nameAuthor, setNameAuthor] = useState ('');
  const [work, setWork] = useState ('');

  const handleInputproyect= (ev) =>{
    console.log (ev.target.value);
    setProyect(ev.target.value);
  }

  const handleInputSlogan= (ev) =>{
    console.log (ev.target.value);
    setSlogan(ev.target.value);
  }
  
  const handleInputRepo= (ev) =>{
    console.log (ev.target.value);
    setRepo(ev.target.value);
  }

  const handleInputDemo= (ev) =>{
    console.log (ev.target.value);
    setDemo(ev.target.value);
  }
  
  const handleInputTecnologies= (ev) =>{
    console.log (ev.target.value);
    setTecnoligies(ev.target.value);
  }

  const handleInputDescription= (ev) =>{
    console.log (ev.target.value);
    setDescription(ev.target.value);
  }

  const handleInputNameAuthor= (ev) =>{
    console.log (ev.target.value);
    setNameAuthor(ev.target.value);
  }

  const handleInputWork= (ev) =>{
    console.log (ev.target.value);
    setWork(ev.target.value);
  }



  return (
    <div className="container">

   <Header iconLaptop={iconLaptop} logoAdalab={logoAdalab} />
    
    <main className="main">
      <Hero/>

      <section className="preview">
        <Preview/>
        <Card work={work} nameAuthor={nameAuthor} proyect={proyect} slogan={slogan} repository={repository} description={description} technologies={technologies} demo={demo}/>
      </section>

    <Form handleInputproyect={handleInputproyect} handleInputSlogan={handleInputSlogan} handleInputRepo={handleInputRepo} handleInputDemo={handleInputDemo} handleInputTecnologies={handleInputTecnologies} handleInputDescription={handleInputDescription} handleInputNameAuthor={handleInputNameAuthor} handleInputWork={handleInputWork}  />
      
    </main>
    <Footer logoAdalab={logoAdalab} />
  </div>
  );
}

export default App;
