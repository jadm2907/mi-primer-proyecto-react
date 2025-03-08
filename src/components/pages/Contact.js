import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Puedes contactarnos a través del siguiente formulario:</p>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;