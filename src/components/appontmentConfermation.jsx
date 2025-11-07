import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { LuCrown } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { PrimeryBadge } from './ui/badge';
import { PrimaryButton, OutlineButton, LinkButton } from './ui/buttons';


function AppontmentConfermation({booking, onGoHome, onViewAppointments}){

  return (
       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CiCircleCheck className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Booking Confirmed!</h2>
        <p className="text-muted-foreground">
          Your appointment has been successfully scheduled. You'll receive a confirmation email shortly.
        </p>
      </div>

      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border mb-6">
        <div className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'>
          <h4 className="leading-none flex items-center justify-between">
            <span>Appointment Details</span>
            <PrimeryBadge className="bg-green-100! text-green-800!">Confirmed</PrimeryBadge>
          </h4>
          <p className='text-muted-foreground'>Booking ID: #{booking.id}</p>
        </div>
        <div className="px-6 [&:last-child]:pb-6 space-y-6">
          {/* Service Information */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-medium text-lg mb-2">{booking.service.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{booking.service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm">Duration: {booking.service.duration}</span>
              <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                <LuCrown className="w-4 h-4" />
                <span>{booking.service.price}</span>
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <CiCalendar className="w-5 h-5  text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{new Date(booking.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CiClock2 className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium">{booking.time}</p>
              </div>
            </div>
          </div>

          {/* Beautician Information */}
          <div className="flex items-center space-x-3">
            <CiUser className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Your Beautician</p>
              <p className="font-medium">{booking.beautician.name}</p>
              <p className="text-sm text-muted-foreground">{booking.beautician.specialty}</p>
            </div>
          </div>

          {/* Customer Information */}
          <div className="border-t pt-4">
            <h4 className="font-medium mb-3">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <CiUser className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{booking.customer.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <CiMail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{booking.customer.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <CiPhone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{booking.customer.phone}</span>
              </div>
              {booking.customer.notes && (
                <div className="flex items-start space-x-3">
                  <FaRegMessage className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm">{booking.customer.notes}</span>
                </div>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="border-t pt-4">
            <div className="flex items-start space-x-3">
              <CiLocationOn className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Glamora Beauty Salon</p>
                <p className="text-sm text-muted-foreground">
                  123 Beauty Lane, Suite 100<br />
                  Beverly Hills, CA 90210
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border mb-6 border-primary/20 bg-primary/5">
        <div className="px-6 [&:last-child]:pb-6 pt-6">
          <h4 className="font-medium mb-3">Important Information</h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Please arrive 10 minutes before your appointment time</li>
            <li>• Bring a valid ID and any relevant medical information</li>
            <li>• Cancellations must be made at least 24 hours in advance</li>
            <li>• You will receive reminder notifications via email and SMS</li>
            <li>• Free parking is available in our building garage</li>
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <PrimaryButton onClick={onViewAppointments} className="flex-1">
          View My Appointments
        </PrimaryButton>
        <OutlineButton onClick={onGoHome} className="flex-1">
          Back to Home
        </OutlineButton>
      </div>

      {/* Contact Support */}
      <div className="text-center mt-8 p-4 bg-muted/30 rounded-lg">
        <p className="text-sm text-muted-foreground mb-2">
          Need to make changes or have questions?
        </p>
        <LinkButton className='h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5'>
          Contact Support: +91 9390417279
        </LinkButton>
      </div>
    </div>
  )
}

export default AppontmentConfermation
