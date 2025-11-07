import React from 'react'
import { PrimeryBadge } from './ui/badge'
import { SecondaryBadge } from './ui/badge';
import Card from './ui/card';

function Services({onBookService}) {

  // list of services 
  const services = [
    // Facial Treatments
    {
      id: 1,
      name: "Diamond Facial",
      description: "Luxurious diamond facial for radiant, glowing skin with anti-aging benefits",
      duration: "90 min",
      price: "149",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1728949202468-c37fdbd76856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZmFjaWFsJTIwc3BhJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1Nzk0NTQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true,
      category: "Facials",
      homeService: true
    },
    {
      id: 2,
      name: "Fruit Facial",
      description: "Natural fruit extracts facial for fresh, hydrated and youthful skin",
      duration: "75 min",
      price: "89",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1689890594531-a60bfaa6212a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMGZhY2lhbCUyMHNraW5jYXJlfGVufDF8fHx8MTc1Nzk0NTQyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true,
      category: "Facials",
      homeService: true
    },
    {
      id: 3,
      name: "Gold Glow Facial",
      description: "24K gold facial treatment for instant glow and skin rejuvenation",
      duration: "80 min",
      price: "129",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1663431512803-9ca20258d1f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZ2xvdyUyMGZhY2lhbHxlbnwxfHx8fDE3NTc5NDU0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      category: "Facials",
      homeService: true
    },
    {
      id: 4,
      name: "Anti-Aging Facial",
      description: "Advanced anti-aging treatment with collagen boost and wrinkle reduction",
      duration: "85 min",
      price: "119",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1548610762-7c6afe24c261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjB0cmVhdG1lbnQlMjBza2luY2FyZSUyMHNwYXxlbnwxfHx8fDE3NTc5NDUxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      category: "Facials",
      homeService: true
    },

    // Hair Services
    {
      id: 5,
      name: "Hair Cut & Style",
      description: "Professional haircut with wash, conditioning and styling",
      duration: "60 min",
      price: "65",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1562940215-4314619607a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY3V0JTIwc3R5bGluZyUyMHNhbG9ufGVufDF8fHx8MTc1Nzk0NTQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true,
      category: "Hair",
      homeService: true
    },
    {
      id: 6,
      name: "Hair Color & Highlights",
      description: "Professional hair coloring with highlights and lowlights",
      duration: "120 min",
      price: "99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1642054247158-b7f888bdf96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3JpbmclMjBoaWdobGlnaHRzfGVufDF8fHx8MTc1Nzk0NTQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      category: "Hair",
      homeService: false
    },
    {
      id: 7,
      name: "Hair Treatment & Spa",
      description: "Deep conditioning treatment with scalp massage and keratin therapy",
      duration: "90 min",
      price: "85",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1647462741268-e5724e5886c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nfGVufDF8fHx8MTc1NzgzMjMyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      category: "Hair",
      homeService: true
    },

    // Nails & Beauty
    {
      id: 8,
      name: "Manicure & Pedicure",
      description: "Complete nail care with gel polish and hand/foot massage",
      duration: "75 min",
      price: "55",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1634235421135-16ebd88c13c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMHBlZGljdXJlJTIwbmFpbHN8ZW58MXx8fHwxNzU3ODU4NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true,
      category: "Nails",
      homeService: true
    },
    {
      id: 9,
      name: "Eyebrow Shaping",
      description: "Professional eyebrow threading and tinting service",
      duration: "30 min",
      price: "35",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1644903751036-adeda377f28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVicm93JTIwdGhyZWFkaW5nJTIwc2hhcGluZ3xlbnwxfHx8fDE3NTc5NDUxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false,
      category: "Beauty",
      homeService: true
    },]
const categories = ["All", ...new Set(services.map(service => service.category))]


  return (
    // need to change just make a centralised card component and call its once 
    <div>
    
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of beauty and wellness services, 
            each designed to help you look and feel your absolute best.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <SecondaryBadge 
              key={category} 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
            >
              {category}
            </SecondaryBadge>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card service={service} onBookService={onBookService}/>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Services
