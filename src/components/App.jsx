import '../styles/App.scss';
import '../images/icons/github.svg';
import iconLaptop  from'../images/laptop-code-solid.svg';
import logoAdalab from '../images/adalab.png';
import { useState } from 'react';

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

    <header className="header">
      <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
        <img className="header__companyLogo" src={iconLaptop}alt="Logo proyectos molones"/>
        <h1 className="header__title">Proyectos molones</h1>
      </a>
      <img className="logoSponsor" src={logoAdalab} alt="Logo Adalab"/>
    </header>
    
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <a className="button--link" href="./">Ver proyectos</a>
      </section>

      <section className="preview">
        <div className="projectImage"></div>
        <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

          <div className="card__author">
            <div className="card__authorPhoto"></div>
            <p className="card__job">
              {work||'Full stack Developer'}
            </p>
            <h3 className="card__name">{nameAuthor||'Emmelie Bjôrklund'}</h3>
          </div>
      
          <div className="card__project">            
            <h3 className="card__name">{proyect|| 'Elegant Workspace'}</h3>
            <p className="card__slogan">{slogan||'Diseños Exclusivos'}</p>
            <h3 className="card__descriptionTitle">{repository||'Product description'}</h3>
            <p className="card__description">{description||'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione'}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{technologies||'React JS - HTML - CSS'}</p>
          
              <a className="icon icon__www" href={'https://' + demo} title="Haz click para ver el proyecto online">
                {demo ||'Web link'}
              </a>
              <a className="icon icon__github" href="#" title="Haz click para ver el código del proyecto">
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>

    
      <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onInput={handleInputproyect}/>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onInput={handleInputSlogan}/>
          <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onInput={handleInputRepo}/>
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onInput={handleInputDemo}/>
          </div>         
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onInput={handleInputTecnologies}/>
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onInput={handleInputDescription}></textarea>
        </fieldset>
    
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onInput={handleInputNameAuthor}/>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onInput={handleInputWork}/>
        </fieldset>
    
        <fieldset className="addForm__group--upload">
          <label className="button">
            Subir foto del proyecto
            <input className="addForm__hidden" type="file"/>
          </label>
          <label className="button">
            Subir foto de la autora
            <input className="addForm__hidden" type="file"/>
          </label>
          <button className="button--large">Guardar proyecto</button>
        </fieldset>
        
      </form>
    </main>

    <footer className="footer">
      <img className="logoSponsor" src={logoAdalab} alt="Logo Adalab"/>
    </footer>

  </div>
  );
}

export default App;
