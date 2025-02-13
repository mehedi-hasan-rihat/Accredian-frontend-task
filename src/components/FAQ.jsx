import React from 'react'
import SectionTitle from './shared/SectionTitle'

export default function FAQ() {
  return (
    <div className='mt-44 max-w-[1360px] mx-auto'>
        <SectionTitle text={'Frequently Asked '} highlightedText={'Questions'}/>
    
    <div className="grid grid-cols-5">
        <div className="space-y-5 col-span-1">
            <div className='text-center py-5 w-[259px] text-[#1A73E8] font-semibold border  border-[#E2E8F0]  shadow-[0_4px_6px_rgba(0,0,0,0.18)] rounded-md '>Eligiblity</div>
            <div className='text-center py-5 text-[#737373] font-semibold w-[259px] border-2 border-[#737373] rounded-md'>How to Use?</div>
            <div className='text-center py-5 w-[259px] text-[#737373] font-semibold border-2 border-[#737373]  rounded-md'>Terms & Conditions</div>
        </div>
        <div className="col-span-4 bg-red-100">
          <p className='text-[#1A73E8] font-semibold'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</p>
        </div>
    </div>
    </div>
  )
}
