'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaClock, FaDirections, FaCalendarAlt } from 'react-icons/fa'

const locations = [
  {
    id: 'spokane',
    name: 'Spokane Office',
    address: '123 Main Street, Spokane, WA 99201',
    phone: '(509) 555-0123',
    hours: 'Mon-Fri: 8am-6pm, Sat: 9am-2pm',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.890547275052!2d-117.4260463!3d47.6587809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e185c30bbe7e5%3A0xddfcc9d60b84d9b1!2sSpokane%2C%20WA!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus',
    image: '/images/spokane-office.jpg'
  },
  {
    id: 'spokane-valley',
    name: 'Spokane Valley Office',
    address: '456 Valley Road, Spokane Valley, WA 99206',
    phone: '(509) 555-0124',
    hours: 'Mon-Fri: 8am-6pm, Sat: 9am-2pm',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.890547275052!2d-117.2392353!3d47.6732289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e185c30bbe7e5%3A0xddfcc9d60b84d9b1!2sSpokane%20Valley%2C%20WA!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus',
    image: '/images/valley-office.jpg'
  },
  {
    id: 'post-falls',
    name: 'Post Falls Office',
    address: '789 Idaho Avenue, Post Falls, ID 83854',
    phone: '(208) 555-0125',
    hours: 'Mon-Fri: 8am-6pm, Sat: 9am-2pm',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.890547275052!2d-116.9492353!3d47.7182289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e185c30bbe7e5%3A0xddfcc9d60b84d9b1!2sPost%20Falls%2C%20ID!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus',
    image: '/images/post-falls-office.jpg'
  }
]

export default function LocationsSection({ sectionBg = 'bg-neutral-75' }: { sectionBg?: string }) {
  const [activeLocation, setActiveLocation] = useState(locations[0])

  return (
    <section className={`py-16 ${sectionBg}`}>
      <div className="container-custom">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">Convenient Locations Near You</h2>
        <p className="text-xl text-neutral-dark/80 text-center mb-12">
          We have three family-friendly offices serving Spokane, Spokane Valley, and Post Falls. 
          Find the location closest to you and book your appointment today.
        </p>

        {/* Location Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 border-2 
                ${activeLocation.id === location.id
                  ? 'bg-primary-blue text-white border-primary-blue'
                  : 'bg-white text-primary-blue border-primary-blue hover:bg-primary-blue/10'}
              `}
            >
              {location.name}
            </button>
          ))}
        </div>

        {/* Active Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={activeLocation.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location Info */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">{activeLocation.name}</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-blue mt-1 mr-3" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-neutral-dark/80">{activeLocation.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-primary-blue mt-1 mr-3" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={`tel:${activeLocation.phone}`} className="text-primary-blue hover:underline">
                    {activeLocation.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-primary-blue mt-1 mr-3" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-neutral-dark/80">{activeLocation.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Link
                href={`/appointment?location=${activeLocation.id}`}
                className="btn-primary w-full text-center flex items-center justify-center"
              >
                <FaCalendarAlt className="mr-2" />
                Book Appointment
              </Link>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(activeLocation.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center flex items-center justify-center"
              >
                <FaDirections className="mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 