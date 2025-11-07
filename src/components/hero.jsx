import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { PrimaryButton, SecondaryButton } from './ui/buttons';

function Hero({onBookNow, onViewServices }) {
  return (
    <div>
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-background via-muted/30 to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Beauty & Wellness
              <span className="block text-primary">Redefined</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Experience luxury beauty treatments in our serene spa environment. 
              Book your perfect appointment with our expert beauticians today.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <FaRegStar className="w-5 h-5 text-primary"/>
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegUser  className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">1000+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <SlCalender  className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Same Day Booking</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <PrimaryButton 
              size="lg" 
              onClick={onBookNow}
              className="px-8 py-3"
            >
              Book Appointment
            </PrimaryButton>
            <SecondaryButton 
              variant="outline" 
              size="lg"
              className="px-8 py-3"
              onClick = {onViewServices}
            >
              View Services
            </SecondaryButton>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
            src="https://images.unsplash.com/photo-1695527081848-1e46c06e6458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHNwYSUyMGludGVyaW9yfGVufDF8fHx8MTc1NzgzMzM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Beautiful spa interior"
              className="w-full h-full object-cover"
            >  
            </img>
          </div>
          
          {/* Floating cards */}
          <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Available Now</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
