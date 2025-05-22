'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTooth, FaChild, FaUserMd, FaHeartbeat } from 'react-icons/fa'

const services = [
  {
    icon: <FaChild className="w-8 h-8" />,
    title: 'Kids First Visit',
    description: 'Make your child\'s first dental visit fun and stress-free. Our gentle approach and kid-friendly environment help create positive dental experiences.',
    features: [
      'No-pressure first visit',
      'Fun waiting room activities',
      'Child-friendly explanations',
      'Reward system for good behavior'
    ]
  },
  {
    icon: <FaTooth className="w-8 h-8" />,
    title: 'Family Check-ups',
    description: 'Convenient family appointments that fit your busy schedule. We make it easy to get everyone\'s check-ups done in one visit.',
    features: [
      'Family block scheduling',
      'Comprehensive exams',
      'Digital X-rays',
      'Preventive care education'
    ]
  },
  {
    icon: <FaUserMd className="w-8 h-8" />,
    title: 'Emergency Care',
    description: 'Dental emergencies don\'t wait, and neither do we. Same-day appointments for urgent care when your family needs it most.',
    features: [
      'Same-day emergency appointments',
      'After-hours emergency line',
      'Quick pain relief',
      'Comprehensive emergency care'
    ]
  },
  {
    icon: <FaHeartbeat className="w-8 h-8" />,
    title: 'Preventive Care',
    description: 'Keep your family\'s smiles healthy with our comprehensive preventive care program. We focus on stopping problems before they start.',
    features: [
      'Regular cleanings',
      'Fluoride treatments',
      'Sealants for children',
      'Custom mouthguards'
    ]
  }
]

export default function FamilyServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Family-Friendly Dental Care</h2>
        <p className="section-subtitle">
          We understand that finding the right dentist for your family is important. 
          That's why we've created a welcoming environment where everyone feels comfortable, 
          from your youngest to your oldest family members.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary-blue">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-dark/80 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-neutral-dark/80">
                        <span className="text-accent-green mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
} 