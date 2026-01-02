'use client';

export default function Home() {
  const officeLocation = "Bankeganj road, gola gokrananath, UP, India";
  const googleMapsUrl = `https://www.google.com/maps/place/Bright+Star+Academy/@28.0809661,80.4611768,17z/data=!3m1!4b1!4m6!3m5!1s0x399f43539bd005e1:0xfc419165d46002e!8m2!3d28.0809615!4d80.4660477!16s%2Fg%2F11mvwkglf0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D`;

  const handleLocationClick = () => {
    window.open(googleMapsUrl, '_blank');
  };

  const services = [
    {
      title: "Term Life Insurance",
      description: "Affordable life insurance coverage for a specific period, providing financial protection for your family.",
      icon: "🛡️"
    },
    {
      title: "Whole Life Insurance",
      description: "Permanent life insurance with cash value accumulation, ensuring lifelong coverage and investment benefits.",
      icon: "💰"
    },
    {
      title: "Endowment Policies",
      description: "Combines insurance protection with savings, providing a lump sum amount at maturity or in case of death.",
      icon: "📈"
    },
    {
      title: "Unit Linked Insurance Plans (ULIP)",
      description: "Investment-cum-insurance products that offer market-linked returns along with life cover.",
      icon: "📊"
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health coverage plans to protect you and your family from medical expenses.",
      icon: "🏥"
    },
    {
      title: "Pension Plans",
      description: "Retirement planning solutions to ensure financial security and steady income post-retirement.",
      icon: "👴"
    },
    {
      title: "Child Plans",
      description: "Specialized plans designed to secure your child's future education and other milestones.",
      icon: "👶"
    },
    {
      title: "Group Insurance",
      description: "Corporate and group insurance solutions for organizations to protect their employees.",
      icon: "👥"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to LIC Agent Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Your trusted partner for life insurance solutions in Gola Gokrananath, UP
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#about"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Learn More
              </a>
              <a
                href="#services"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              About Us
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-xl p-8 mb-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Office
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to our LIC agent office. We are located in the heart of Gola Gokrananath, 
                providing easy access for all our clients in the region. Our office is equipped with 
                modern facilities to serve you better.
              </p>
              
              <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Office Address:</h4>
                <p className="text-lg text-gray-700 mb-4">
                  {officeLocation}
                </p>
                <button
                  onClick={handleLocationClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  View on Google Maps
                </button>
              </div>

              <div className="mt-8">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  Why Choose Us?
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span>Years of experience in the insurance industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span>Personalized service tailored to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span>Competitive rates and comprehensive coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span>Quick and efficient claim processing support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span>Dedicated customer support throughout the policy period</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 mb-12 text-center">
              Comprehensive insurance solutions to meet all your financial protection needs
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
