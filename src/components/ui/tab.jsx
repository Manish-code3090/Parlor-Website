import React from 'react'
import { useState } from 'react';

function Tab({tabs}) {
    
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className='flex flex-col gap-2 space-y-6'>
        <div className='bg-muted text-muted-foreground h-9 items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-2'>
            {
                tabs.map((tab) => (
                    <button
                      data-state={activeTab === tab.label ? "active" : "inactive"}
                    key={tab.label}
                    className=" flex items-center justify-center flex-1 gap-1.5 px-2 py-1
  text-sm font-medium whitespace-nowrap transition-[color,box-shadow]
  rounded-xl border border-transparent h-[calc(100%-1px)]
  text-foreground dark:text-muted-foreground
  focus-visible:outline-1 focus-visible:ring-[3px]
  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring
  disabled:pointer-events-none disabled:opacity-50
  [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
  data-[state=active]:bg-card"

  onClick={()=> setActiveTab(tab.label)}
                    >
                        {tab.label}
                    </button>


                ))
            }
        </div>
      <div className='flex-1 outline-none space-y-6'>
        {tabs.map((tab)=>(
            tab.label === activeTab && (
               <div>
                 {tab.content}
               </div>
            )
        ))}
      </div>

    </div>
  )
}

export default Tab
