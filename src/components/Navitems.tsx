"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useState,useEffect,useRef } from "react"
import NavItem from "./NavItem"

const NavItems =()=>{
    const [activeIndex ,setActiveIndex] = useState<
    null | number >(null)
    return(

        <div className='flex gap-4 h-full' >
        {PRODUCT_CATEGORIES.map((category, i) => {
          const handleOpen = () => {
            if (activeIndex === i) {
              setActiveIndex(null)
            } else {
              setActiveIndex(i)
            }
          }
  
          const close = () => setActiveIndex(null)
  
          const isOpen = i === activeIndex
  
          return (
            // eslint-disable-next-line react/jsx-key
            <NavItem/>
          )
        })}
      </div>
    )
  }
  
export default NavItems