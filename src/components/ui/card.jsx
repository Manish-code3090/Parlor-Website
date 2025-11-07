import React from 'react'
import { PrimeryBadge } from './badge.jsx';
import { OutlineBadge } from './badge.jsx';
import { SecondaryBadge } from './badge.jsx';
import { MdOutlineHome } from "react-icons/md";
import { PrimaryButton } from './buttons';
import { FaStar } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";


function Card({service, onBookService}) {
  return (
    
    <div
     data-slot="card" 
     key={service.id}
    className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border group hover:shadow-lg transition-all duration-300 overflow-hidden">
      
       <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      ></img>
                      <div className="absolute top-3 left-3 flex gap-2">
                        {service.popular && (
                          <PrimeryBadge className="bg-primary text-primary-foreground">
                            Popular
                          </PrimeryBadge>
                        )}
                        {service.homeService && (
                          <PrimeryBadge  className=" bg-green-100! text-green-800! flex items-center gap-1">
                            <MdOutlineHome className=" text-green-800 w-3 h-3" />
                            Home Service
                          </PrimeryBadge>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                        <FaStar className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{service.rating}</span>
                      </div>
                    </div>
      
      <div 
      data-slot="card-header"
      className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-2'>

        <div className="flex justify-between items-start">
<h4 data-slot="card-title" className='text-muted-foreground leading-none text-lg'>{ service.name }</h4>
                  <div className="flex items-center space-x-1 text-lg font-bold text-primary">
                    <LuCrown className="text-primary w-4 h-4" />
                    <span>{service.price}</span>
                    {service.isAddOn && <span className="text-xs text-muted-foreground">+</span>}
                  </div>
        </div>
        <p className="text-muted-foreground text-sm">{service.description}</p>
      </div>

      <div data-slot = 'card-contact' className='px-6 [&:last-child]:pb-6 pt-0'>

          <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <CiClock2 className="text-accent-foreground w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <OutlineBadge variant="outline" className="text-xs ">
                    {service.category}
                  </OutlineBadge>
                </div>
                
                <div className="flex gap-2">
                  <PrimaryButton
                    
                    className="flex-1 cursor-pointer h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"
                    onClick={() => onBookService(service)}
                  >
                    Book Now
                  </PrimaryButton>
                  {service.homeService && !service.isAddOn && (
                    <OutlineBadge
                      className="flex items-center gap-1 cursor-pointer  "
                      onClick={() => onBookService({...service, name: service.name + " (Home Service)", price: (parseInt(service.price) + 50).toString()})}
                    >
                      <MdOutlineHome className="" />
                      Home
                    </OutlineBadge>
                  )}
                </div>
      </div>
    </div>
  )
}

export default Card
