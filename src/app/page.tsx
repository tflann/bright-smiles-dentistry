import HeroSection from '@/components/HeroSection'
import LocationsSection from '@/components/LocationsSection'
import FamilyServicesSection from '@/components/FamilyServicesSection'
import ReviewsSection from '@/components/ReviewsSection'
import TechnologySection from '@/components/TechnologySection'
import InsuranceSection from '@/components/InsuranceSection'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar, FaUserMd, FaClock, FaTooth, FaChild, FaHeart, FaPhone, FaCalendarAlt, FaCheckCircle, FaSmile, FaUserFriends } from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Welcome to Bright Smiles Dentistry
              </h2>
              <p className="text-lg text-neutral-dark/80 mb-6">
                At Bright Smiles Dentistry, we believe that exceptional dental care should be accessible to every family. Our modern, comfortable office is designed with your family's comfort in mind, featuring the latest technology and a warm, welcoming atmosphere.
              </p>
              <p className="text-lg text-neutral-dark/80 mb-8">
                Our team of experienced dental professionals is committed to providing personalized care that meets the unique needs of each family member, from the youngest to the oldest. We take the time to explain procedures, answer questions, and ensure you feel confident about your dental care decisions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/appointment" className="btn-primary">
                  Book Your Visit
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
              <Image
                src="/images/dental-office-interior.jpg"
                alt="Modern dental office interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            Our Approach to Family Dentistry
          </h2>
          <p className="text-xl text-neutral-dark/80 text-center mb-12 max-w-3xl mx-auto">
            We combine advanced technology with a gentle, patient-centered approach to create a positive dental experience for your entire family.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6">
                <FaUserFriends className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Family-Focused Care</h3>
              <p className="text-neutral-dark/80 mb-4">
                We understand that each family member has unique dental needs. Our comprehensive approach ensures that everyone, from toddlers to grandparents, receives personalized care in a comfortable environment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-neutral-dark/80">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2" />
                  <span>Child-friendly environment</span>
                </li>
                <li className="flex items-center text-neutral-dark/80">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2" />
                  <span>Gentle approach for all ages</span>
                </li>
                <li className="flex items-center text-neutral-dark/80">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2" />
                  <span>Family appointment scheduling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6">
                <FaTooth className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Preventive Focus</h3>
              <p className="text-neutral-dark/80 mb-4">
                Prevention is the foundation of good dental health. We emphasize regular check-ups, cleanings, and education to help your family maintain healthy smiles for life.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-neutral-dark/80">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2" />
                  <span>Regular check-ups</span>
                </li>
                <li className="flex items-center text-neutral-dark/80">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2" />
                  <span>Professional cleanings</span>
                </li>
                <li className="flex items-center text-neutral-dark/80">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2" />
                  <span>Dental health education</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6">
                <FaSmile className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Comfort & Technology</h3>
              <p className="text-neutral-dark/80 mb-4">
                Our modern office combines advanced dental technology with a warm, welcoming atmosphere to ensure your family's comfort during every visit.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-neutral-dark/80">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2" />
                  <span>Digital X-rays</span>
                </li>
                <li className="flex items-center text-neutral-dark/80">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2" />
                  <span>Comfort amenities</span>
                </li>
                <li className="flex items-center text-neutral-dark/80">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2" />
                  <span>Modern treatment options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            Comprehensive Family Dental Services
          </h2>
          <p className="text-xl text-neutral-dark/80 text-center mb-12 max-w-3xl mx-auto">
            From routine check-ups to advanced treatments, we offer a full range of dental services to keep your family's smiles healthy and beautiful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
              <h3 className="text-2xl font-bold mb-4">Preventive Care</h3>
              <p className="text-neutral-dark/80 mb-6">
                Regular dental care is essential for maintaining healthy teeth and gums. Our preventive services help catch issues early and keep your family's smiles bright.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Regular Check-ups</span>
                    <p className="text-neutral-dark/60">Comprehensive examinations to monitor oral health</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Professional Cleanings</span>
                    <p className="text-neutral-dark/60">Thorough cleaning to remove plaque and tartar</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Dental Sealants</span>
                    <p className="text-neutral-dark/60">Protective coating to prevent cavities</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
              <h3 className="text-2xl font-bold mb-4">Restorative Care</h3>
              <p className="text-neutral-dark/80 mb-6">
                When dental issues arise, we provide effective solutions to restore your family's oral health and maintain beautiful smiles.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Fillings & Crowns</span>
                    <p className="text-neutral-dark/60">Durable restorations for damaged teeth</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Root Canal Therapy</span>
                    <p className="text-neutral-dark/60">Gentle treatment to save infected teeth</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Dental Implants</span>
                    <p className="text-neutral-dark/60">Permanent solution for missing teeth</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary-teal text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            Why Choose Bright Smiles Dentistry
          </h2>
          <p className="text-xl text-white/80 text-center mb-12 max-w-3xl mx-auto">
            We combine expertise, technology, and a patient-centered approach to provide exceptional dental care for your family.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUserMd className="w-8 h-8 text-primary-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Team</h3>
              <p className="text-white/80">
                Our experienced dental professionals are committed to providing the highest quality care.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="w-8 h-8 text-primary-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Convenient Hours</h3>
              <p className="text-white/80">
                Early morning and evening appointments to fit your family's busy schedule.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTooth className="w-8 h-8 text-primary-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Modern Technology</h3>
              <p className="text-white/80">
                State-of-the-art equipment and techniques for optimal results.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="w-8 h-8 text-primary-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4">Patient Comfort</h3>
              <p className="text-white/80">
                A warm, welcoming environment designed for your family's comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <LocationsSection sectionBg="bg-white" />

      {/* Insurance and Financing Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            Insurance & Financing Options
          </h2>
          <p className="text-xl text-neutral-dark/80 text-center mb-12 max-w-3xl mx-auto">
            We believe quality dental care should be accessible to everyone. That's why we offer flexible payment options and work with most major insurance providers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
              <h3 className="text-2xl font-bold mb-4">Insurance Coverage</h3>
              <p className="text-neutral-dark/80 mb-6">
                We work with most major insurance providers to help you maximize your benefits and minimize out-of-pocket expenses.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">In-Network Providers</span>
                    <p className="text-neutral-dark/60">We accept most major PPO insurance plans</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Out-of-Network Benefits</span>
                    <p className="text-neutral-dark/60">We'll help you maximize your benefits</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Claims Assistance</span>
                    <p className="text-neutral-dark/60">We handle all insurance paperwork</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-[6px_6px_24px_rgba(0,0,0,0.16)]">
              <h3 className="text-2xl font-bold mb-4">Flexible Financing</h3>
              <p className="text-neutral-dark/80 mb-6">
                We offer several payment options to make dental care affordable for your family, including flexible financing plans and convenient payment methods.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">CareCredit Financing</span>
                    <p className="text-neutral-dark/60">Flexible payment plans with low monthly payments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">In-House Payment Plans</span>
                    <p className="text-neutral-dark/60">Customized payment options for qualified patients</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-blue mr-2 mt-1" />
                  <div>
                    <span className="font-semibold">Multiple Payment Methods</span>
                    <p className="text-neutral-dark/60">Credit cards, checks, and cash accepted</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/insurance" className="btn-primary text-lg">
              Learn More About Insurance & Financing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-teal text-white">
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