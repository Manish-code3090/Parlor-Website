import React from 'react'
import { PrimeryBadge } from './ui/badge';
import { OutlineButton } from './ui/buttons';
import { CiCircleCheck } from "react-icons/ci";
import { LuCrown } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import Tab from './ui/tab';
function Appointment({ 
  appointments,
  onReschedule,
  onCancel,
  onFeedback,}) {

  // Mock appointments for demonstration
  const mockAppointments = [
    {
      id: "1",
      service: {
        name: "Facial Treatment",
        duration: "60 min",
        price: "89",
      },
      date: new Date("2024-01-20"),
      time: "2:00 PM",
      beautician: {
        name: "Sarah Johnson",
        specialty: "Facial & Skincare",
      },
      status: "upcoming",
      customer: {
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "+91 9390417279",
      },
    },
    {
      id: "2",
      service: {
        name: "Hair Styling",
        duration: "90 min",
        price: "65",
      },
      date: new Date("2024-01-15"),
      time: "10:00 AM",
      beautician: {
        name: "Emily Chen",
        specialty: "Hair Styling",
      },
      status: "completed",
      customer: {
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "+91 9390417279",
      },
    },
    {
      id: "3",
      service: {
        name: "Manicure & Pedicure",
        duration: "75 min",
        price: "55",
      },
      date: new Date("2024-01-25"),
      time: "11:30 AM",
      beautician: {
        name: "Maria Rodriguez",
        specialty: "Nails & Massage",
      },
      status: "upcoming",
      customer: {
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "+91 9390417279",
      },
    },
  ];

   const allAppointments = [
    ...appointments,
    ...mockAppointments,
  ];

    const upcomingAppointments = allAppointments.filter(
    (apt) => apt.status === "upcoming",
  );
  const pastAppointments = allAppointments.filter(
    (apt) => apt.status === "completed",
  );


  const getStatusBadge = (status) => {
    switch (status) {
      case "upcoming":
        return (
          <PrimeryBadge className="bg-blue-100! text-blue-800!">
            Upcoming
          </PrimeryBadge>
        );
      case "completed":
        return (
          <PrimeryBadge className="bg-green-100! text-green-800!">
            Completed
          </PrimeryBadge>
        );
      case "cancelled":
        return <PrimeryBadge variant="destructive">Cancelled</PrimeryBadge>;
      default:
        return <PrimeryBadge variant="secondary">{status}</PrimeryBadge>;
    }
  };


 const renderAppointmentCard = (appointment) => (
    <div key={appointment.id} className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border mb-4">
      <div className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="leading-none text-lg">
              {appointment.service.name}
            </h4>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>{appointment.service.duration}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <LuCrown className="w-3 h-3" />
                <span>{appointment.service.price}</span>
              </span>
            </div>
          </div>
          {getStatusBadge(appointment.status)}
        </div>
      </div>
      <div className="px-6 [&:last-child]:pb-6 space-y-4">
        {/* Date & Time */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <CiCalendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">
                Date
              </p>
              <p className="font-medium">
                {new Date(appointment.date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  },
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CiClock2 className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">
                Time
              </p>
              <p className="font-medium">{appointment.time}</p>
            </div>
          </div>
        </div>

        {/* Beautician */}
        <div className="flex items-center space-x-3">
          <CiUser className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">
              Beautician
            </p>
            <p className="font-medium">
              {appointment.beautician.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {appointment.beautician.specialty}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-3">
          <CiLocationOn className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">
              Location
            </p>
            <p className="font-medium">Glamora Beauty Salon</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-2">
          {appointment.status === "upcoming" && (
            <>
              <OutlineButton className='h-8 rounded-md gap-1.5 px-3 '
                onClick={() => onReschedule(appointment.id)}
              >
                Reschedule
              </OutlineButton>
              <OutlineButton className="h-8 rounded-md gap-1.5 px-3 "
                onClick={() => onCancel(appointment.id)}
              >
                Cancel
              </OutlineButton>
              <OutlineButton className="h-8 rounded-md gap-1.5 px-3" >
                Call Salon
              </OutlineButton>
            </>
          )}

        </div>
      </div>
    </div>
  );

const tabData = [
  {
    label: "Upcoming",
    content : upcomingAppointments.map((app) => renderAppointmentCard(app))
  },
  {
    label : "Past",
    content : pastAppointments.map((app) => renderAppointmentCard(app))
  }
] 
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          My Appointments
        </h2>
        <p className="text-muted-foreground">
          Manage your beauty appointments
        </p>
      </div>

<Tab
tabs={tabData}
/>

      </div>
  )
}

export default Appointment
