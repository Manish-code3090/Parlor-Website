import React from 'react'
import { useState, useEffect } from 'react';
import { OutlineButton, PrimaryButton, SecondaryButton } from './ui/buttons';
import { OutlineBadge, PrimeryBadge, SecondaryBadge } from './ui/badge';
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";
import Label from './ui/label';
import Input from './ui/input';
import TextArea from './ui/textArea';


function Booking({ selectedService, onBookingComplete, onBack }) {
 const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedBeautician, setSelectedBeautician] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

   const beauticians = [
    { id: "1", name: "Sarah Johnson", specialty: "Facial & Skincare", rating: 4.9 },
    { id: "2", name: "Emily Chen", specialty: "Hair Styling", rating: 4.8 },
    { id: "3", name: "Maria Rodriguez", specialty: "Nails & Massage", rating: 5.0 },
    { id: "4", name: "Anna Williams", specialty: "Bridal & Special Events", rating: 4.9 }
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];
  

const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !selectedBeautician || !formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }
if(!selectedService){
   alert("Please Select a servive then fill the form ");
   onBack();
   return;
}
const booking = {
      id: Date.now().toString(),
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      beautician: beauticians.find(b => b.id === selectedBeautician),
      customer: formData,
      status: "confirmed",
      createdAt: new Date()
    };

    onBookingComplete(booking);

  }

  const handleInputChange = (field , value) =>{
    setFormData((prev)=> ({...prev, [field] : value}) )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <OutlineButton  onClick={onBack} className="mb-4">
          ← Back to Services
        </OutlineButton>
        <h2 className="text-3xl font-bold text-foreground">Book Your Appointment</h2>
        <p className="text-muted-foreground mt-2">Complete the form below to schedule your visit</p>
      </div>


      <div className='grid lg:grid-cols-3 gap-8'>
        {/* Booking Form */}
        <div className="lg:col-span-2">
          <div data-slot = 'Booking-form' className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border">
<div data-slot = 'card-header' className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'>
<h4 data-slot = 'title' className='leading-none'>Appointment Details</h4>
<p data-slot = 'description' className='text-muted-foreground'>Please provide your information and preferred time</p>
</div>

<div data-slot = 'contant' className='px-6 [&:last-child]:pb-6 space-y-6'>
<form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center space-x-2">
                    <CiUser className="w-5 h-5" />
                    <span>Personal Information</span>
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 9999999999"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Date Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center space-x-2">
                    <CiCalendar className="w-5 h-5" />
                    <span>Select Date</span>
                  </h3>
                  <Input
                    type="date"
                    value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                    onChange={(e) => setSelectedDate(e.target.value ? new Date(e.target.value) : undefined)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full"
                  />
                </div>

                {/* Time Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center space-x-2">
                    <CiClock2 className="w-5 h-5" />
                    <span>Select Time</span>
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                  {timeSlots.map((time) => (
  selectedTime === time ? (
    <PrimeryBadge
      key={time}
      type="button"
      onClick={() => setSelectedTime(time)}
      className="text-xs cursor-pointer p-2!"
      time={time}
    >
      {time} 
    </PrimeryBadge>
  ) : (
    <OutlineBadge
      key={time}
      type="button"
      onClick={() => setSelectedTime(time)}
      className="text-xs cursor-pointer p-2!"
     
    >
      {time} 
    </OutlineBadge>
  )
))}
                  </div>
                </div>

                {/* Beautician Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Choose Your Beautician</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {beauticians.map((beautician) => (
                      <div
                        key={beautician.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedBeautician === beautician.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedBeautician(beautician.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{beautician.name}</h4>
                            <p className="text-sm text-muted-foreground">{beautician.specialty}</p>
                          </div>
                          <SecondaryBadge >★ {beautician.rating}</SecondaryBadge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Notes */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center space-x-2">
                    <FaRegMessage className="w-5 h-5" />
                    <span>Special Notes (Optional)</span>
                  </h3>
                  <TextArea
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any special requests or preferences..."
                    rows={3}
                  />
                </div>

                <PrimaryButton type="submit" size="lg" className="w-full">
                  Confirm Booking
                </PrimaryButton>
              </form>
</div>
          </div>

        </div>
          <div className="lg:col-span-1">
          <div data-slot = 'card' className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl border sticky top-8'>
            <div data-slot = 'header' className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'>
            <h4 data-slot = 'heading' className='leading-none'>Booking Summary</h4>
            </div>
            <div data-slot = 'content' className='px-6 [&:last-child]:pb-6 space-y-4"'>
              {selectedService && (
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium">{selectedService.name}</h4>
                  <p className="text-sm text-muted-foreground">{selectedService.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">Duration: {selectedService.duration}</span>
                    <div className="flex items-center space-x-1 font-bold text-primary">
                      <LuCrown className="w-4 h-4" />
                      <span>{selectedService.price}</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedDate && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{selectedDate.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
              )}

              {selectedTime && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
              )}

              {selectedBeautician && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Beautician:</span>
                  <span className="font-medium">
                    {beauticians.find(b => b.id === selectedBeautician)?.name}
                  </span>
                </div>
              )}

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <div className="flex items-center space-x-1 text-primary">
                    <LuCrown className="w-4 h-4" />
                    <span>{selectedService?.price || "0"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
