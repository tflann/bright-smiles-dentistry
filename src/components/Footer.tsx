'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const locations = [
  {
    name: 'Spokane',
    address: '123 Main Street, Spokane, WA 99201',
    phone: '(509) 555-0123'
  },
  {
    name: 'Spokane Valley',
    address: '456 Valley Way, Spokane Valley, WA 99206',
    phone: '(509) 555-0124'
  },
  {
    name: 'Post Falls',
    address: '789 Falls Drive, Post Falls, ID 83854',
    phone: '(208) 555-0125'
  }
]

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Our Team', href: '/team' },
  { name: 'Patient Forms', href: '/forms' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Practice Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Bright Smiles Dentistry"
                width={180}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 mb-6">
              Providing gentle, family-focused dental care in Spokane for over 20 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-primary-blue transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary-blue transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary-blue transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Locations</h3>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.name} className="text-white/80">
                  <h4 className="font-semibold text-white mb-2">{location.name}</h4>
                  <p className="flex items-start mb-1">
                    <FaMapMarkerAlt className="w-5 h-5 mr-2 mt-1 text-primary-blue" />
                    {location.address}
                  </p>
                  <p className="flex items-center">
                    <FaPhone className="w-5 h-5 mr-2 text-primary-blue" />
                    {location.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-primary-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center text-white/80">
                <FaPhone className="w-5 h-5 mr-2 text-primary-blue" />
                <span>Emergency: (509) 555-0126</span>
              </p>
              <p className="flex items-center text-white/80">
                <FaEnvelope className="w-5 h-5 mr-2 text-primary-blue" />
                <span>info@brightsmiles.com</span>
              </p>
              <div className="pt-4">
                <Link
                  href="/appointment"
                  className="inline-block bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Bright Smiles Dentistry. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-white/60 hover:text-white text-sm">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 