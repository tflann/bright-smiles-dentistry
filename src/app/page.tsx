import HeroSection from '@/components/HeroSection'
import LocationsSection from '@/components/LocationsSection'
import FamilyServicesSection from '@/components/FamilyServicesSection'
import ReviewsSection from '@/components/ReviewsSection'
import TechnologySection from '@/components/TechnologySection'
import InsuranceSection from '@/components/InsuranceSection'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar, FaUserMd, FaClock, FaTooth, FaChild, FaHeart, FaPhone, FaCalendarAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Trust Signals Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.08)]">
              <div className="text-4xl mb-4 flex justify-center">
                <span role="img" aria-label="Insurance" className="block">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Most Insurance Accepted</h3>
              <p className="text-neutral-dark/80">We work with most major insurance providers to make dental care accessible for your family.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.08)]">
              <div className="text-4xl mb-4 flex justify-center">
                <span role="img" aria-label="Emergency" className="block">🚑</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Same Day Emergency Care</h3>
              <p className="text-neutral-dark/80">Dental emergencies? We're here to help with same-day appointments for your family.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.08)]">
              <div className="text-4xl mb-4 flex justify-center">
                <span role="img" aria-label="Special" className="block">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">New Patient Special</h3>
              <p className="text-neutral-dark/80">Free consultation and cleaning for new patients. Book now!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Book Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-center mb-4">Book Your Visit</h2>
          <p className="text-xl text-neutral-dark/80 text-center mb-12">
            Choose your preferred service and book your appointment in seconds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/appointment?service=cleaning" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.08)] flex flex-col items-start hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaTooth className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="font-semibold mb-2">Cleaning & Check-up</h3>
              <p className="text-neutral-dark/60 text-sm">Regular maintenance for a healthy smile</p>
            </Link>
            <Link href="/appointment?service=emergency" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.08)] flex flex-col items-start hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaClock className="w-8 h-8 text-accent-red" />
              </div>
              <h3 className="font-semibold mb-2">Emergency Care</h3>
              <p className="text-neutral-dark/60 text-sm">Same-day appointments available</p>
            </Link>
            <Link href="/appointment?service=cosmetic" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.08)] flex flex-col items-start hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaHeart className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="font-semibold mb-2">Cosmetic Dentistry</h3>
              <p className="text-neutral-dark/60 text-sm">Transform your smile today</p>
            </Link>
            <Link href="/appointment?service=family" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.08)] flex flex-col items-start hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaChild className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="font-semibold mb-2">Family Package</h3>
              <p className="text-neutral-dark/60 text-sm">Special rates for the whole family</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-primary-teal text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-xl">Happy Patients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-xl">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Services Section */}
      <FamilyServicesSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Technology Section */}
      <TechnologySection />

      {/* Insurance Section */}
      <InsuranceSection />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary-teal text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-center mb-4">Why Choose Bright Smiles Dentistry</h2>
          <p className="text-xl text-white/80 text-center mb-12">
            We understand that finding the right dental care for your family is important. 
            Here's why parents trust us with their children's smiles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-8 text-center shadow-[6px_6px_24px_rgba(0,0,0,0.08)]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="w-8 h-8 text-primary-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gentle Care</h3>
              <p className="text-white/80">
                Our team specializes in making dental visits comfortable and stress-free for children of all ages.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-8 text-center shadow-[6px_6px_24px_rgba(0,0,0,0.08)]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="w-8 h-8 text-primary-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Convenient Hours</h3>
              <p className="text-white/80">
                Early morning and evening appointments available to fit your family's busy schedule.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-8 text-center shadow-[6px_6px_24px_rgba(0,0,0,0.08)]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTooth className="w-8 h-8 text-primary-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Preventive Focus</h3>
              <p className="text-white/80">
                We emphasize education and prevention to help your child maintain a healthy smile for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-center mb-4">Your Family's Journey to Better Dental Health</h2>
          <p className="text-xl text-neutral-dark/80 text-center mb-12">
            We make it easy to get started with our simple, family-friendly process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.08)]">
              <div className="text-2xl font-semibold text-primary-blue mb-2">1. Book Your Visit</div>
              <p className="text-neutral-dark/80">Schedule your family's appointments online or call us. We offer flexible hours to fit your busy schedule.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.08)]">
              <div className="text-2xl font-semibold text-primary-blue mb-2">2. First Visit</div>
              <p className="text-neutral-dark/80">Meet our team, discuss your family's needs, and receive comprehensive examinations in a comfortable environment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.08)]">
              <div className="text-2xl font-semibold text-primary-blue mb-2">3. Treatment Plan</div>
              <p className="text-neutral-dark/80">We'll create personalized treatment plans for your family and discuss all options with you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <LocationsSection sectionBg="bg-white" />

      {/* CTA Section */}
      <section className="py-16 bg-primary-teal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Ready to Experience the Bright Smiles Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied families who trust us with their dental care.
            Book your family's first visit today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-primary-teal px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
              Book Your Visit
            </Link>
            <Link href="/contact" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-teal transition-all duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Emergency CTA */}
      <div className="fixed bottom-8 left-8 z-50 hidden md:block">
        <a href="tel:+1234567890" className="bg-accent-red text-white px-6 py-3 rounded-full shadow-lg hover:bg-accent-red/90 transition-all duration-200 flex items-center space-x-2">
          <FaPhone className="w-5 h-5" />
          <span>Emergency Call</span>
        </a>
      </div>
    </main>
  )
} 