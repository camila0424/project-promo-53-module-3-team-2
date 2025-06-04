function Form(props) {
  const handleInput = (ev) => {
    const formData = ev.target.id;
    const value = ev.target.value;

    props.changeToAnotherState(formData, value);
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          onInput={handleInput}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onInput={handleInput}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            onInput={handleInput}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            onInput={handleInput}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          onInput={handleInput}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          onInput={handleInput}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          onInput={handleInput}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onInput={handleInput}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label className="button">
          Subir foto del proyecto
          <input className="addForm__hidden" type="file" />
        </label>
        <label className="button">
          Subir foto de la autora
          <input className="addForm__hidden" type="file" />
        </label>
        <button className="button--large">Guardar proyecto</button>
      </fieldset>
    </form>
  );
}

export default Form;
