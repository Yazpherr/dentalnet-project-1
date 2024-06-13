import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        doctor: '',
        message: '',
        privacyPolicy: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar el formulario
        console.log('Formulario enviado', formData);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-12">
            <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                <img
                    src="path/to/dentist-image.jpg"  // Reemplaza esto con la ruta real de la imagen
                    alt="Dentist"
                    className="rounded-lg shadow-lg w-full"
                />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6">Concertar una <span className="text-yellow-500">Cita</span></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Nombre Completo"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Teléfono / Celular</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="+56 (9) 0000-0000"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Fecha</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="DD/MM/YYYY"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Doctor</label>
                        <select
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        >
                            <option value="">Seleccione un doctor</option>
                            <option value="Dr. Pritis Barua">Dr. Pritis Barua</option>
                            {/* Añade más opciones de doctores según sea necesario */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mensaje</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Incluya un mensaje..."
                        />
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="privacyPolicy"
                                checked={formData.privacyPolicy}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">Usted acepta nuestra política de privacidad.</span>
                        </label>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Confirmar Cita
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
