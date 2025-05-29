import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const reviews = [
  {
    id: 5,
    name: 'Emily P.',
    location: 'Spokane Valley',
    rating: 5,
    review: "The preventive care program here is outstanding. They caught a small issue early and prevented it from becoming a bigger problem. Their attention to detail and thorough examinations give me peace of mind. The hygienists are gentle yet thorough, and the dentists take time to answer all my questions.",
    platform: 'google',
    date: '1 week ago'
  },
  {
    id: 9,
    name: 'Amanda L.',
    location: 'Post Falls',
    rating: 5,
    review: "The family-friendly atmosphere here is wonderful. They make dental visits fun for my children while maintaining the highest standards of care. Their preventive approach has saved us from more serious dental issues, and their prices are reasonable. I'm grateful to have found such a great dental practice.",
    platform: 'google',
    date: '2 weeks ago'
  },
  {
    id: 4,
    name: 'Michael R.',
    location: 'Spokane',
    rating: 5,
    review: "As someone who used to have dental anxiety, I can't say enough good things about Bright Smiles. The team is incredibly understanding and takes the time to explain every step of the process. Their modern equipment and gentle approach make dental visits stress-free. I've recommended them to all my friends and family.",
    platform: 'yelp',
    date: '2 weeks ago'
  },
  {
    id: 6,
    name: 'David W.',
    location: 'Post Falls',
    rating: 5,
    review: "I appreciate how they accommodate my busy schedule with early morning appointments. The staff is always professional and friendly. They've helped me maintain excellent oral health, and their cosmetic work is exceptional. The office is modern and comfortable, making each visit pleasant.",
    platform: 'yelp',
    date: '3 weeks ago'
  },
  {
    id: 2,
    name: 'Jennifer K.',
    location: 'Spokane Valley',
    rating: 5,
    review: "The team at Bright Smiles has completely changed my perspective on dental visits. Their waiting room is thoughtfully designed with entertainment for kids, and the staff goes above and beyond to make everyone feel comfortable. I appreciate how they take the time to educate us about proper dental care and prevention.",
    platform: 'yelp',
    date: '1 month ago'
  },
  {
    id: 8,
    name: 'James B.',
    location: 'Spokane Valley',
    rating: 5,
    review: "I've been to many dental offices, but Bright Smiles stands out for their exceptional service. Their attention to detail is remarkable, and they use the latest technology to ensure the best care. The staff is knowledgeable and friendly, making each visit a positive experience.",
    platform: 'yelp',
    date: '1 month ago'
  },
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Spokane',
    rating: 5,
    review: "I've been bringing my family here for years, and I couldn't be happier with the care we receive. The staff remembers us by name, and they're incredibly patient with my children. The office is always spotless, and they use the latest technology. What really stands out is how they explain everything in detail and make sure we're comfortable with any procedures.",
    platform: 'google',
    date: '2 months ago'
  },
  {
    id: 7,
    name: 'Rachel S.',
    location: 'Spokane',
    rating: 5,
    review: "The team's commitment to patient education is impressive. They don't just fix problems; they help prevent them. Their approach to dental care is comprehensive, and they take the time to understand each patient's unique needs. The results speak for themselves - my family's dental health has never been better.",
    platform: 'google',
    date: '2 months ago'
  },
  {
    id: 3,
    name: 'Lisa T.',
    location: 'Post Falls',
    rating: 5,
    review: "When my son had a dental emergency, they got us in immediately. The care and attention they showed was incredible. They explained everything clearly and made sure he was comfortable throughout the procedure. Their follow-up care was thorough, and they even called to check on him the next day.",
    platform: 'google',
    date: '3 months ago'
  }
]

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">What Our Patients Say</h2>
        <p className="text-xl text-neutral-dark/80 text-center mb-12">
          Don't just take our word for it - hear from our satisfied patients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-neutral-light p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="text-accent-gold flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <div className="relative w-20 h-6">
                  <Image
                    src={`/images/${review.platform}-logo.png`}
                    alt={`${review.platform} review`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-neutral-dark/80 mb-4 text-lg">
                "{review.review}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue font-bold mr-4">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-neutral-dark/60 text-sm">{review.location}</p>
                  </div>
                </div>
                <p className="text-neutral-dark/60 text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 