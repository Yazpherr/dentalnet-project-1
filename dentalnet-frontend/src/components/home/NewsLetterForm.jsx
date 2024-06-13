import { useState } from 'react';

const NewsletterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para manejar el envío del formulario
    console.log('Nombre:', firstName);
    console.log('Correo electrónico:', email);
    // Restablecer los campos del formulario
    setFirstName('');
    setEmail('');
  };

  return (
    <div className="bg-primaryBlue text-white rounded-lg p-6 max-w-screen-lg mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Suscríbete para nuestro boletín informativo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Primer Nombre"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="p-2 rounded-md text-black"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-md text-black"
        />
        <button type="submit" className="bg-white text-blue-600 p-2 rounded-md">
          Suscríbase ahora
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
