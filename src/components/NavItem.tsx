"use client"
import {Button} from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
type Category=typeof PRODUCT_CATEGORIES[number]
interface NavItemProps{
    category :Category
    handleOpen:() =>void
    close :() =>void
    isOpen:boolean
    isAnyOpen :boolean
}
const NavItem =({}:NavItemProps) =>{
    return <div className="flex">
        <div className="relative flex items-center">
            {/* <Button className=" gap-1.5" onClick={handleOpen} variant={isOpen ? "secondary"}> */}

            {/* </Button> */}
        </div>
    </div>
}
export default NavItem