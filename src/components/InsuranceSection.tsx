import Link from 'next/link'
import { FaCreditCard, FaFileInvoiceDollar, FaHandHoldingUsd, FaUserFriends } from 'react-icons/fa'

const insuranceOptions = [
  {
    icon: <FaCreditCard className="w-8 h-8" />,
    title: 'Most Insurance Accepted',
    description: 'We work with most major insurance providers to make dental care accessible for your family.',
    link: '/insurance'
  },
  {
    icon: <FaFileInvoiceDollar className="w-8 h-8" />,
    title: 'CareCredit Financing',
    description: 'Flexible payment plans with 0% interest options available for qualified patients.',
    link: '/financing'
  },
  {
    icon: <FaHandHoldingUsd className="w-8 h-8" />,
    title: 'In-House Membership Plan',
    description: 'No insurance? No problem. Our membership plan provides comprehensive coverage at an affordable price.',
    link: '/membership'
  },
  {
    icon: <FaUserFriends className="w-8 h-8" />,
    title: 'Family Discounts',
    description: 'Special rates for families and multiple procedures. Ask us about our family package deals.',
    link: '/family-packages'
  }
]

export default function InsuranceSection() {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container-custom">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">Insurance & Financing Options</h2>
        <p className="text-xl text-neutral-dark/80 text-center mb-12">
          We believe quality dental care should be accessible to everyone. That's why we offer multiple payment options to fit your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insuranceOptions.map((option, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{option.title}</h3>
              <p className="text-neutral-dark/80 mb-6">{option.description}</p>
              <Link href={option.link} className="text-primary-blue font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-blue rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Not Sure About Coverage?</h3>
          <p className="text-white/90 mb-6">
            Our team will help you understand your benefits and find the best payment option for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/insurance-check" className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
              Check Your Coverage
            </Link>
            <Link href="/contact" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-all duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 