
const doctors = [
    {
        name: "Dr. Jeanette Hoff",
        specialty: "Tratamiento de ortodoncia",
        faculty: "Faculty of Medicine of Chile",
        image: "path/to/doctor1.jpg" // Reemplaza con la ruta real de la imagen
    },
    {
        name: "Dr. David Ambrose",
        specialty: "Tratamiento de ortodoncia",
        faculty: "Faculty of Medicine of Chile",
        image: "path/to/doctor2.jpg" // Reemplaza con la ruta real de la imagen
    },
    {
        name: "Dr. Jenelia Breton",
        specialty: "Tratamiento de ortodoncia",
        faculty: "Faculty of Medicine of Chile",
        image: "path/to/doctor3.jpg" // Reemplaza con la ruta real de la imagen
    },
    {
        name: "Dr. Jagajeet Aurora",
        specialty: "Tratamiento de ortodoncia",
        faculty: "Faculty of Medicine of Chile",
        image: "path/to/doctor4.jpg" // Reemplaza con la ruta real de la imagen
    },
];

const DoctorsSection = () => {
    return (
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                    Conozca a nuestros <span className="text-black">Cerebros</span> <span className="text-yellow-500">CONOZCA A LOS DOCTORES</span>
                </h2>
                <div className="flex items-center justify-center">
                    <button className="p-2 bg-gray-300 rounded-full mx-2">&lt;</button>
                    <div className="flex overflow-x-auto space-x-6">
                        {doctors.map((doctor, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center w-64 flex-shrink-0">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-32 h-32 rounded-full mx-auto"
                                />
                                <h3 className="text-lg font-bold mt-4">{doctor.name}</h3>
                                <p className="text-gray-700 mt-2">{doctor.specialty}</p>
                                <p className="text-gray-500">{doctor.faculty}</p>
                                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                                    Hacer una cita
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="p-2 bg-gray-300 rounded-full mx-2">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorsSection;
