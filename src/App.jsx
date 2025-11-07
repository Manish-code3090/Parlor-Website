import { useState } from "react";

import Header from "./components/header";
import Appointment from "./components/appointment";
import AppontmentConfermation from "./components/appontmentConfermation";
import Booking from "./components/booking";
import Services from "./components/service";
import Hero from "./components/hero";
import Contact from "./components/contact";

function App() {

  const [currentView, setCurrentView] = useState("home");
const [selectedService, setSelectedService] = useState(null);
const [appointments, setAppointments] = useState([]);
const [currentBooking, setCurrentBooking] = useState(null);

const handleViewChange = (view) =>{
  setCurrentView(view)
}

const handleBookNow = () => {
    setCurrentView("booking");
  };

  const handleBookService = (service) => {
    setSelectedService(service);
    setCurrentView("booking");
  };

  const handleBookingComplete = (booking) => {
    setCurrentBooking(booking);
    setAppointments(prev => [...prev, booking]);
    setCurrentView("confirmation");
  };

  const handleGoHome = () => {
    setCurrentView("home");
    setSelectedService(null);
    setCurrentBooking(null);
  };

  const handleViewAppointments = () => {
    setCurrentView("appointments");
  };

  const handleBackToServices = () => {
    setCurrentView("services");
    setSelectedService(null);
  };
  const handleContact = () => {
    setCurrentView("contact")
  }

  const handleReschedule = (appointmentId) => {
    // In a real app, this would open a reschedule modal or form
    console.log("Reschedule appointment:", appointmentId);
  };

  const handleCancel = (appointmentId) => {
    // In a real app, this would show a confirmation dialog and update the appointment status
    setAppointments(prev => 
      prev.map(apt => 
        apt.id === appointmentId 
          ? { ...apt, status: "cancelled" }
          : apt
      )
    );
  };

  const handleFeedback = (appointmentId, feedback) => {
    // In a real app, this would submit feedback to the backend
    console.log("Feedback for appointment:", appointmentId, feedback);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "home":
        return (
          <>
            <Hero onBookNow={handleBookNow} onViewServices = {handleBackToServices} />
            <div id="services">
              <Services onBookService={handleBookService} />
            </div>
          </>
        );
      
      case "services":
        return <Services onBookService={handleBookService} />;
      
      case "booking":
        return (
          <Booking
            selectedService={selectedService}
            onBookingComplete={handleBookingComplete}
            onBack={handleBackToServices}
          />
        );
      
      case "confirmation":
        return (
          <AppontmentConfermation
            booking={currentBooking}
            onGoHome={handleGoHome}
            onViewAppointments={handleViewAppointments}
          />
        );
      
      case "appointments":
        return (
          <Appointment
            appointments={appointments}
            onReschedule={handleReschedule}
            onCancel={handleCancel}
            onFeedback={handleFeedback}
          />
        );
      case "contact":
        return (
          <Contact/>
        )
      default:
        return (
          <>
            <Hero onBookNow={handleBookNow} />
            <div id="services">
              <Services onBookService={handleBookService} />
            </div>
          </>
        );
    }
  };

  return (
    
    <div className="min-h-screen bg-background">
      <Header  currentView={currentView} onViewChange={handleViewChange} /> 
      {/*  insie the header after creating these methods */}
      <main>
        {renderCurrentView()} 
      </main>
      
      {/* Footer */}
      
        <footer className="bg-muted/50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>123 road, Suite 100</p>
                  <p>Beverly Hills, Patna</p>
                  <p>Phone: +91 91********</p>
                  <p>Email: info@glamora.com</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Instagram: @glamora</p>
                  <p>Facebook: Glamora Beauty Salon</p>
                  <p>TikTok: @glamora</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 Glamora Beauty Salon. All rights reserved.</p>
            </div>
          </div>
        </footer>
      
    </div>
  )
}

export default App
