import React from 'react'
import '../globals.css'
import { User } from 'lucide-react';
import { Earth } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
import { List } from 'lucide-react';
import { ListOrdered } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IndianRupee } from 'lucide-react';

function Form() {
  return (
    <form suppressHydrationWarning action="https://formsubmit.co/vs@anantsales.in" method="post" className='flex flex-col w-full gap-[1rem] p-6 py-8'>
     <div className='inline-flex gap-3'><User /><label htmlFor="1"><b>Full Name</b></label></div>
      <input type="text" name="Name" id="1" placeholder="John Adams" required className='p-[0.9rem] bg-transparent border rounded-[5px] w-full'/>

      <div className='inline-flex gap-3'><Earth /><label htmlFor="cmpany"><b>Company Name</b></label></div>
      <input type="text" name="Company Name" id="cmapny" placeholder="ABC Pvt. Ltd" required className='p-[0.9rem] bg-transparent border rounded-[5px] w-full'/>
      
      <div className='inline-flex gap-3'><Phone /><label htmlFor="1"><b>Contact No.</b></label></div>

      <input type="tel" name="Mobile No." placeholder="[+1 (415) 867-5309]" required className='p-[0.9rem] bg-transparent border rounded-[5px] w-full'/>

      <div className='inline-flex gap-3'><Mail /><label htmlFor="1"><b>Email</b></label></div>
      <input type="email" name="Email" placeholder="your@example.com" required className='p-[0.9rem] bg-transparent border rounded-[5px] w-full'/>

      <div className='inline-flex gap-3'><MapPinHouse /><label htmlFor="1"><b>Address</b></label></div>
      <input type="text" name="Address" placeholder="177A, Bleecker St, New York" max="300" className='p-[0.9rem] bg-transparent border rounded-[5px] w-full'/>

      <div className='inline-flex gap-3'><List /><label htmlFor="1"><b>Product Category Interested In</b></label></div>
      <div className="sel">
        <select name="Product Category Interested In" suppressHydrationWarning required className='p-[0.9rem] bg-transparent border rounded-[5px] w-full' defaultValue="">
          <ul>
            <li>
              <option value="" disabled className='bg-background color-foreground'>Select Category</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Daily Utilities</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Decorative Idol and Lightning Collection</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Leather Products</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Professional Gifting</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>International Brands</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Promotional Products</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Premium Gift & Combos</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Dryfruit Combos and Branded Gift Hampers</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>Home Appliances</option>
            </li>
            <li>
              <option className='bg-background color-foreground'>For Other Specific Requirements, please specify below </option>
            </li>
          </ul>
        </select>
      </div>

      <div className='inline-flex gap-3'><ListOrdered /><label htmlFor="1"><b>Estimated Quantity Required</b></label></div>
      <div className="sel">
        <select name="Quantity" className='p-[0.9rem] bg-transparent border rounded-[5px] w-full' defaultValue="">
          <option className='bg-background color-foreground' value="" disabled>Select Quantity</option>
          <option className='bg-background color-foreground'>51-150</option>
          <option className='bg-background color-foreground'>151-300</option>
          <option className='bg-background color-foreground'>301-499</option>
          <option className='bg-background color-foreground'>500 and above</option>
        </select>
      </div>
      <div className='inline-flex gap-3'><IndianRupee /><label htmlFor="1"><b>Average Product Price</b></label></div>
      <div className="sel">
        <select name="Average Product Price" className='p-[0.9rem] bg-transparent border rounded-[5px] w-full' defaultValue="">
          <option className='bg-background color-foreground' value="" disabled>Select Average Product Price</option>
          <option className='bg-background color-foreground'>Under 250</option>
          <option className='bg-background color-foreground'>251-500</option>
          <option className='bg-background color-foreground'>501-1500</option>
          <option className='bg-background color-foreground'>1501-3000</option>
          <option className='bg-background color-foreground'>3001-4999</option>
          <option className='bg-background color-foreground'>5000 and Above</option>
        </select>
      </div>
      <div className='inline-flex gap-3'><MessageSquare /><label htmlFor="1"><b>Describe Your Product Requirement</b></label></div>
        <textarea name="Describe Your Product Requirement" placeholder="Other than this, I want..." id="textarea" className='resize-none p-[0.9rem] bg-transparent border rounded-[5px] h-[6rem] w-full'></textarea>

        <div className="w-full"><Button asChild><button type="submit" className="cursor-pointer w-full text-2xl"> Send</button></Button></div>
        </form>
  )
}


export default Form