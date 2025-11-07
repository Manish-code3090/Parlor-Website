import React from 'react'
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { PrimaryButton } from './ui/buttons';
import { useState } from 'react';
import { FiScissors } from "react-icons/fi";

function Header({ currentView, onViewChange }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const navigation = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Book Now", id: "booking" },
    { name: "My Appointments", id: "appointments" },
    { name : "Contact", id : "contact"},
  ];
  
  return (
   
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
           
              <FiScissors className='w-4 h-4 text-white text-2xl'/>
           
            </div>
            <span className="text-xl font-semibold text-foreground">Glamora</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`${
                  currentView === item.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground font-medium hover:text-foreground"
                } transition-colors duration-200`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <PrimaryButton className="hidden sm:flex items-center space-x-2">
             <FaPhoneAlt className="w-4 h-4"/>
              <span>+91 9390417279</span>
            </PrimaryButton>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              {mobileMenuOpen ? <IoMdClose className="w-5 h-5"/> : <IoMdMenu className="w-5 h-5"/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`${
                    currentView === item.id
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  } block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:text-foreground hover:bg-muted transition-colors duration-200`}
                >
                  {item.name}
                </button>
              ))}
             
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
