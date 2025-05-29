'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTooth, FaChild, FaUserMd, FaHeartbeat, FaCheck } from 'react-icons/fa'

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
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">Family-Friendly Dental Care</h2>
        <p className="text-xl text-neutral-dark/80 text-center mb-12">
          Comprehensive dental services for every member of your family, from toddlers to grandparents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
            <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaChild className="w-8 h-8 text-primary-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Children's Dentistry</h3>
            <p className="text-neutral-dark/80 mb-6">
              Gentle, fun dental visits that help your child develop positive oral health habits for life.
            </p>
            <ul className="space-y-2 text-neutral-dark/80">
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-primary-blue mr-2" />
                First Visit Program
              </li>
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-primary-blue mr-2" />
                Preventive Care
              </li>
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-primary-blue mr-2" />
                Fun, Kid-Friendly Environment
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
            <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaUserMd className="w-8 h-8 text-primary-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Family Dentistry</h3>
            <p className="text-neutral-dark/80 mb-6">
              Complete dental care for the whole family, from routine cleanings to advanced treatments.
            </p>
            <ul className="space-y-2 text-neutral-dark/80">
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-primary-blue mr-2" />
                Regular Check-ups
              </li>
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-primary-blue mr-2" />
                Cleanings & Exams
              </li>
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-primary-blue mr-2" />
                Restorative Care
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
            <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaHeartbeat className="w-8 h-8 text-primary-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Emergency Care</h3>
            <p className="text-neutral-dark/80 mb-6">
              Same-day appointments for dental emergencies. We're here when you need us most.
            </p>
            <ul className="space-y-2 text-neutral-dark/80">
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-primary-blue mr-2" />
                24/7 Emergency Line
              </li>
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-primary-blue mr-2" />
                Same-Day Appointments
              </li>
              <li className="flex items-center">
                <FaCheck className="w-5 h-5 text-primary-blue mr-2" />
                Immediate Pain Relief
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 