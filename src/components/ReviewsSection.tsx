import Image from 'next/image'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Spokane',
    rating: 4.5,
    review: "The team at Bright Smiles made my children's first dental visit a breeze. The office is welcoming, and the staff is incredibly patient and kind. My kids actually look forward to their check-ups now!",
    platform: 'google',
    date: '2024-03-15'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Spokane Valley',
    rating: 5,
    review: "As someone who used to be anxious about dental visits, I can't say enough good things about Bright Smiles. The sedation options made my root canal completely painless, and the follow-up care was exceptional.",
    platform: 'yelp',
    date: '2024-03-18'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Spokane',
    rating: 5,
    review: "The family package deal is amazing! We've been able to get all our dental work done at a great price. The staff remembers our family and always makes us feel welcome.",
    platform: 'healthgrades',
    date: '2024-03-20'
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Post Falls',
    rating: 4.5,
    review: "I had a dental emergency on a weekend, and they were able to see me right away. The care was excellent, and they made sure I was comfortable throughout the entire process.",
    platform: 'google',
    date: '2024-03-22'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    location: 'Spokane Valley',
    rating: 5,
    review: "The technology they use is impressive! The digital X-rays and 3D scanning made it easy to understand my treatment plan. The results exceeded my expectations.",
    platform: 'yelp',
    date: '2024-03-25'
  },
  {
    id: 6,
    name: 'James Wilson',
    location: 'Spokane',
    rating: 5,
    review: "The preventive care program has been a game-changer for our family. The team is proactive about dental health, and their educational approach has helped us maintain better oral hygiene.",
    platform: 'healthgrades',
    date: '2024-03-28'
  },
  {
    id: 7,
    name: 'Jennifer Martinez',
    location: 'Post Falls',
    rating: 5,
    review: "The office is beautiful and modern, but what really stands out is the personalized care. They take the time to explain everything and make sure you're comfortable with your treatment plan.",
    platform: 'google',
    date: '2024-03-30'
  },
  {
    id: 8,
    name: 'Robert Kim',
    location: 'Spokane Valley',
    rating: 5,
    review: "The family discount program is fantastic. We've saved so much on our dental care, and the quality of service is top-notch. Highly recommend for families!",
    platform: 'yelp',
    date: '2024-04-01'
  },
  {
    id: 9,
    name: 'Amanda White',
    location: 'Spokane',
    rating: 5,
    review: "I was nervous about getting my wisdom teeth removed, but the team made it a smooth experience. The sedation options were explained clearly, and the recovery was much easier than I expected.",
    platform: 'healthgrades',
    date: '2024-04-03'
  }
]

function shuffleArray(array: any[]) {
  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledReviews = shuffleArray([...reviews]);

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">What Our Patients Say</h2>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5" />
            ))}
            <FaStarHalfAlt className="w-5 h-5" />
          </div>
          <span className="text-neutral-dark font-medium">4.9/5 from 500+ reviews</span>
        </div>
        <p className="text-xl text-neutral-dark/80 text-center mb-12">
          Don't just take our word for it - hear from our satisfied patients about their experiences at Bright Smiles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shuffledReviews.map((review: any) => (
            <div key={review.id} className="bg-neutral-75 p-6 rounded-lg shadow-[4px_4px_16px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col items-center mb-4">
                <Image
                  src={`/images/${review.platform}-logo.png`}
                  alt={`${review.platform} review`}
                  width={80}
                  height={24}
                  className="h-6 w-auto mb-2 mx-auto"
                />
                <div className="flex text-yellow-400 mb-2">
                  {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                  {review.rating % 1 !== 0 && <FaStarHalfAlt className="w-5 h-5" />}
                </div>
              </div>
              <p className="text-neutral-dark/80 mb-4 text-left">{review.review}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-neutral-dark/60 text-sm">{review.location}</p>
                </div>
                <p className="text-neutral-dark/60 text-sm">{new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 