'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { FaPhone } from 'react-icons/fa'

const navigation = [
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Family Dentistry', href: '/services/family' },
      { name: 'Children\'s Dentistry', href: '/services/children' },
      { name: 'Emergency Care', href: '/services/emergency' },
    ],
  },
  { name: 'Locations', href: '/locations' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      {/* Main Navigation */}
      <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Bright Smiles Dentistry"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-neutral-dark hover:text-primary-blue transition-colors duration-200"
                  onMouseEnter={() => item.dropdown && setServicesOpen(true)}
                  onMouseLeave={() => item.dropdown && setServicesOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && servicesOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-neutral-dark hover:bg-neutral-light hover:text-primary-blue"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-6">
              <a
                href="tel:5095550123"
                className="flex items-center text-primary-blue hover:text-primary-blue/80 transition-colors"
              >
                <FaPhone className="w-5 h-5 mr-2" />
                <span>Call Now</span>
              </a>
              <Link href="/appointment" className="btn-primary">
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-neutral-dark hover:text-primary-blue"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-neutral-dark hover:text-primary-blue hover:bg-neutral-light rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-neutral-dark hover:text-primary-blue hover:bg-neutral-light rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="tel:5095550123"
                className="block px-3 py-2 text-base font-medium text-primary-blue hover:bg-neutral-light rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <FaPhone className="h-5 w-5 mr-2" />
                  <span>Call Now</span>
                </div>
              </a>
              <Link
                href="/appointment"
                className="block w-full text-center btn-primary mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 