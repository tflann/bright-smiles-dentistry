'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaClock, FaStar, FaAward, FaTooth, FaStarHalfAlt } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dental-office.jpg"
          alt="Bright Smiles Dentistry Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark/80 to-neutral-dark/60" />
      </div>

      {/* Hero Content */}
      <div className="relative container-custom h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Your Preferred Family Dentist in Spokane and Surrounding Areas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Trusted by local families for over 20 years. We make dental visits comfortable for everyone - from toddlers to grandparents.
            </p>

            {/* Rating Badge */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5" />
                ))}
                <FaStarHalfAlt className="w-5 h-5" />
              </div>
              <span className="text-white font-medium">4.9/5 from 500+ reviews</span>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center text-white/90">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-primary-blue" />
                <span>3 Convenient Locations</span>
              </div>
              <div className="flex items-center text-white/90">
                <FaClock className="w-5 h-5 mr-2 text-primary-blue" />
                <span>Same-Day Appointments</span>
              </div>
              <div className="flex items-center text-white/90">
                <FaPhone className="w-5 h-5 mr-2 text-primary-blue" />
                <span>24/7 Emergency Care</span>
              </div>
              <div className="flex items-center text-white/90">
                <FaTooth className="w-5 h-5 mr-2 text-primary-blue" />
                <span>Sedation Options Available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment" className="btn-primary text-lg">
                Book Your Visit
              </Link>
              <a href="tel:+1234567890" className="btn-secondary text-lg flex items-center justify-center">
                <FaPhone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating CTAs */}
      <div className="fixed bottom-8 left-8 z-50 hidden md:block">
        <a href="tel:+1234567890" className="bg-accent-red text-white px-6 py-3 rounded-full shadow-lg hover:bg-accent-red/90 transition-all duration-200 flex items-center space-x-2">
          <FaTooth className="w-5 h-5" />
          <span>Emergency Call</span>
        </a>
      </div>
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <a href="tel:+1234567890" className="bg-primary-blue text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-blue/90 transition-all duration-200 flex items-center space-x-2">
          <FaPhone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
      </div>
    </section>
  )
} 