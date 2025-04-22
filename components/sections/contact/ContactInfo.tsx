import { contactData } from "../../../data/sections/contact-data";

export default function ContactInfo() {
  return (
    <section className="py-16 bg-white myContainer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Office Locations */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {contactData.offices.title}
            </h2>
            <div className="space-y-4">
              {contactData.offices.locations.map((location, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{location.country}</h3>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {contactData.contactInfo.title}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  {contactData.contactInfo.email.label}
                </h3>
                <div className="space-y-1">
                  {contactData.contactInfo.email.addresses.map((email, index) => (
                    <a
                      key={index}
                      href={`mailto:${email}`}
                      className="text-blue-600 hover:text-blue-800 block"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  {contactData.contactInfo.phone.label}
                </h3>
                <div className="space-y-1">
                  {contactData.contactInfo.phone.numbers.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\D/g, '')}`}
                      className="text-blue-600 hover:text-blue-800 block"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {contactData.hours.title}
            </h2>
            <div className="space-y-3">
              {contactData.hours.schedule.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="font-medium text-gray-900">{item.days}</span>
                  <span className="text-gray-600">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 