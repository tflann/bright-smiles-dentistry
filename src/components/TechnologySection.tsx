import Image from 'next/image'
import { FaXRay, FaCamera, FaTooth, FaSyringe, FaShieldAlt } from 'react-icons/fa'

const technologies = [
  {
    icon: <FaXRay className="w-8 h-8" />,
    title: 'Digital X-Rays',
    description: '90% less radiation than traditional X-rays with instant results for faster diagnosis and treatment planning.'
  },
  {
    icon: <FaCamera className="w-8 h-8" />,
    title: 'Intraoral Cameras',
    description: 'See exactly what we see with our high-definition cameras, making it easier to understand your dental health.'
  },
  {
    icon: <FaTooth className="w-8 h-8" />,
    title: '3D Scanning',
    description: 'Advanced 3D imaging for precise treatment planning and comfortable, accurate dental restorations.'
  },
  {
    icon: <FaSyringe className="w-8 h-8" />,
    title: 'Pain-Free Injections',
    description: 'Our advanced injection system makes dental procedures virtually pain-free for a more comfortable experience.'
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: 'Advanced Sterilization',
    description: 'State-of-the-art sterilization protocols ensuring the highest standards of safety and hygiene.'
  }
]

export default function TechnologySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">Advanced Dental Technology</h2>
        <p className="text-xl text-neutral-dark/80 text-center mb-12">
          We invest in the latest dental technology to provide you with the most comfortable, efficient, and precise care possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-neutral-light p-8 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-6">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
              <p className="text-neutral-dark/80">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-blue mb-2">20+</div>
            <p className="text-neutral-dark/80">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-blue mb-2">10,000+</div>
            <p className="text-neutral-dark/80">Happy Patients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-blue mb-2">100%</div>
            <p className="text-neutral-dark/80">Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
} 