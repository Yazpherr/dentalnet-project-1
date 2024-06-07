const testimonials = [
    {
        name: "Samantha Payne",
        image: "path/to/image.jpg",  // Reemplaza esto con la ruta real de la imagen
        rating: 5,
        text: "He tenido que ver a muchos dentistas a lo largo de mi vida por culpa de mis dientes. Pero tengo que decir que en DentalNet puedo confiar en recibir un tratamiento de calidad y tener la tranquilidad de que todo irá bien, y eso teniendo en cuenta que no me gustan mucho los dentistas."
    },
    // Puedes añadir más testimonios aquí
];

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<svg key={i} className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.372 2.448a1 1 0 00-.364 1.118l1.286 3.945c.3.921-.755 1.688-1.54 1.118l-3.372-2.448a1 1 0 00-1.175 0l-3.372 2.448c-.784.57-1.839-.197-1.54-1.118l1.286-3.945a1 1 0 00-.364-1.118L2.265 9.372c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z"/></svg>);
        } else {
            stars.push(<svg key={i} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.372 2.448a1 1 0 00-.364 1.118l1.286 3.945c.3.921-.755 1.688-1.54 1.118l-3.372-2.448a1 1 0 00-1.175 0l-3.372 2.448c-.784.57-1.839-.197-1.54-1.118l1.286-3.945a1 1 0 00-.364-1.118L2.265 9.372c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z"/></svg>);
        }
    }
    return <div className="flex">{stars}</div>;
};

const TestimonialsSection = () => {
    return (
        <div className="bg-blue-800 py-12">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-white text-3xl font-semibold mb-8">Qué dicen nuestros clientes de nosotros</h2>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg m-4 w-full md:w-1/2 lg:w-1/3">
                            <img src={testimonial.image} alt={testimonial.name} className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-lg font-bold text-center mt-4">{testimonial.name}</h3>
                            <div className="flex justify-center mt-2">
                                <StarRating rating={testimonial.rating} />
                            </div>
                            <p className="text-gray-700 mt-4 text-center">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
