import { useTranslation } from "react-i18next";
import person1 from "../../public/images/person1.jpg";
import person2 from "../../public/images/person2.jpg";
import person3 from "../../public/images/person3.jpg";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Emanuel L.",
      role: t('testimonials.client1.role'),
      rating: 5,
      text: t('testimonials.client1.text'),
      image: person3, // Associate image with testimonial
    },
    {
      name: "Cormac O'Sullivan",
      role: t('testimonials.client2.role'),
      rating: 5,
      text: t('testimonials.client2.text'),
      image: person2, // Associate image with testimonial
    },
    {
      name: "Sabrina Trabelsi",
      role: t('testimonials.client3.role'),
      rating: 4.5,
      text: t('testimonials.client3.text'),
      image: person1, // Associate image with testimonial
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return (
      <div className="flex gap-1 text-yellow-400">
        {stars}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              {/* Person Image */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image} // Use the associated image
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              {/* Rating Stars */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              {/* Testimonial Text */}
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}