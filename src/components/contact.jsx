import React from 'react'
import { useState } from 'react';
import StoreMap from '../utils/map';
import { CiClock2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PrimaryButton } from './ui/buttons';
import TextArea from './ui/textArea';
import Label from './ui/label';
import Input from './ui/input';
import { IoMdClose } from "react-icons/io";

function Contact() {
  const [message, setMessage] = useState({
    name : "",
    email : "",
    message : "",
  })
  const [open, setOpen] = useState(false);

  const handleChange = (field, value)=>{
    setMessage((prev) => ({...prev, [field] : value}))
  }
const handleSubmit = (e)=>{
   e.preventDefault();
  if(!message.name || !message.email, !message.message){
 alert("Please fill in all required fields");
      return;
  }
    //  in real application we make a DB call to store the message 
  console.log(message);
  alert("Message successfully sent")
}
  return (
    <div className="max-w-3xl lg:max-w-4xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <h2 className="text-5xl font-bold text-foreground">Get in tuch</h2>
            <p className="text-muted-foreground mt-2 w-full lg:w-2/3">We'd love to hear from you whether you have question, feedback, suggesation or want to book any custom buty experience our team is here to heli you </p>
          </div>
          <div class="flex flex-col lg:flex-row gap-4">
            {/* Contact information */}
  <div class="w-full lg:w-1/2 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border group shadow-lg transition-all p-2 overflow-hidden">
  <h3 className="text-2xl font-medium flex items-center space-x-2 ml-2!">
                     <span>Contact Details</span>
                   </h3>
   
  <div className="px-6 last:pb-6 space-y-4">
          {/* Date & Time */}
         <div className="flex items-center space-x-3">
            <CiPhone className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">+9123187080 </p>
            </div>
          </div>
           <div className="flex items-center space-x-3">
            <CiMail className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">Mail@gmail.com</p>
            </div>
          </div>
  
          <div className="flex items-center space-x-3">
            <CiLocationOn className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">Glamor Beauty launge, Patna Bihar</p>
            </div>
          </div>
  
    
          <div className="flex items-center space-x-3">
            <CiClock2 className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium">Mon-Sat, 9:00 AM - 8:00PM </p>
            </div>
          </div>
  
     <div className="flex items-center space-x-3">
           <PrimaryButton onClick={()=> setOpen(true)} className={'mt-1.5  '}>View on Map</PrimaryButton>
          </div>
     
        </div>
  </div>

  {/* Message form */}
  <div class="w-full lg:w-1/2 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border group shadow-lg transition-all p-2 overflow-hidden">
  <h3 className="text-2xl font-medium flex items-center space-x-2 ml-2!">
                     <span>Message</span>
                   </h3>
  
 <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                
            
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={message.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
               

               
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={message.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>



                {/* Special Notes */}
                <div className="space-y-4">
                <Label className="mb-1" htmlFor="name">Message *</Label>
                  <TextArea
                    value={message.notes}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Message....."
                    rows={3}
                  />
                </div>

                <PrimaryButton type="submit" size="lg" className="w-full">
                  Send Message
                </PrimaryButton>
              </form>

        </div>
</div>

{/**/}

 {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-3 relative">
           <div className=' flex justify-between '>
             <h2 className="text-xl font-semibold mb-4">Our Location</h2>
             <IoMdClose className='text-3xl cursor-pointer' onClick={() => setOpen(false)}/>
           </div>
             <StoreMap/> 
            <div className="flex justify-end ">
            </div>
          </div>
        </div>
      )}

          </div>
  )
}

export default Contact
