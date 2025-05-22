# Bright Smiles Dentistry Website

A modern, responsive website for Bright Smiles Dentistry, built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern, high-trust design optimized for family dental care
- 📱 Fully responsive layout for all devices
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized for local search
- 🔒 HIPAA-compliant forms and data handling
- 📍 Multi-location support with Google Maps integration
- ⭐ Google Reviews integration
- 📝 Blog and educational content
- 📅 Online appointment booking

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Google Maps API
- Google Reviews API

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/bright-smiles-dentistry.git
cd bright-smiles-dentistry
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_google_places_api_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
bright-smiles-dentistry/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   ├── lib/                 # Utility functions
│   └── styles/             # Global styles
├── public/                 # Static assets
│   └── images/            # Image assets
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies
```

## Development Guidelines

1. **Component Structure**
   - Use functional components with TypeScript
   - Follow atomic design principles
   - Implement responsive design using Tailwind CSS

2. **Code Style**
   - Follow ESLint configuration
   - Use Prettier for code formatting
   - Write meaningful component and function names

3. **Performance**
   - Optimize images using Next.js Image component
   - Implement lazy loading for below-the-fold content
   - Minimize bundle size

4. **Accessibility**
   - Follow WCAG 2.1 guidelines
   - Use semantic HTML
   - Implement proper ARIA labels

## Deployment

The site is configured for deployment on Vercel. Push to the main branch to trigger automatic deployment.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For questions or support, please contact the development team. 