import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    numeroEmpleado: '',
    nivelEducacion: '',
    profesion: '',
    nombre: '',
    apellido1: '',
    apellido2: '',
    foto: null,
    genero: '',
    correo: '',
    materiasDespliege: [],
    estado: '',
    municipio: '',
    fechaIncorporacion: '',
    fechaEdicion: '',
    peticiones: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      foto: file
    });
  };

  const handleMateriasChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setFormData({
      ...formData,
      materiasDespliege: selectedOptions
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos al servidor o hacer lo que necesites con ellos
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Información Personal</legend>

        <fieldset>
        <legend>Foto</legend>
        <label>
          Cargar Foto:
          <input
            type="file"
            name="foto"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        {formData.foto && (
          <div className="photo-preview">
            <img src={URL.createObjectURL(formData.foto)} alt="Foto de perfil" />
          </div>
        )}
      </fieldset>
        <label>
          Número de Empleado:
          <input
            type="text"
            name="numeroEmpleado"
            value={formData.numeroEmpleado}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Apellido Paterno:
          <input
            type="text"
            name="apellido1"
            value={formData.apellido1}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Apellido Materno:
          <input
            type="text"
            name="apellido2"
            value={formData.apellido2}
            onChange={handleInputChange}
          />
        </label>

        <label>
          
          Género:
          <input
            type="radio"
            name="genero"
            value="masculino"
            checked={formData.genero === 'masculino'}
            onChange={handleInputChange}
          />{' '}
          Masculino
          <input
            type="radio"
            name="genero"
            value="femenino"
            checked={formData.genero === 'femenino'}
            onChange={handleInputChange}
          />{' '}
          Femenino
          <input
            type="radio"
            name="genero"
            value="otro"
            checked={formData.genero === 'otro'}
            onChange={handleInputChange}
          />{' '}
          Otro
        </label>
      </fieldset>

      <fieldset>
        <legend>Información Educativa</legend>
        <label>
          Nivel de Educación:
          <select
            name="nivelEducacion"
            value={formData.nivelEducacion}
            onChange={handleInputChange}
          >
            <option value="">Seleccione</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="preparatoria">Preparatoria</option>
            <option value="universidad">Universidad</option>
            <option value="licenciatura">licenciatura</option>
            <option value="maestria">Maestria</option>
            <option value="doctorado">Doctorado</option>
          </select>
        </label>

        <label>
          Profesión:
          <input
            type="text"
            name="profesion"
            value={formData.profesion}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Materias de Despliegue:
          <select
            multiple
            name="materiasDespliege"
            value={formData.materiasDespliege}
            onChange={handleMateriasChange}
          >
            <option value="matematicas">Matemáticas</option>
            <option value="ciencias">Ciencias</option>
            <option value="historia">Historia</option>
            <option value="ingles">Inglés</option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <legend>Contacto</legend>
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Ubicación</legend>
        <label>
          Estado:
          <input
            type="text"
            name="estado"
            value={formData.estado}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Municipio:
          <input
            type="text"
            name="municipio"
            value={formData.municipio}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Fechas</legend>
        <label>
          Fecha de Incorporación:
          <input
            type="date"
            name="fechaIncorporacion"
            value={formData.fechaIncorporacion}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Fecha de Edición:
          <input
            type="date"
            name="fechaEdicion"
            value={formData.fechaEdicion}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Peticiones</legend>
        <label>
          Peticiones en Texto Libre:
          <textarea
            name="peticiones"
            value={formData.peticiones}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>

      

      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default EmployeeForm;
