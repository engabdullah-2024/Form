import { useState } from "react"
import Form from "./Form"



function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
   
    return <div>
    
    
    
    <div className="flex justify-between bg-purple-500 px-3 py-3    sm:px-10 sm:py-4 items-center">
        <h1 className="text-4xl text-white">Nooty</h1>
       
        <button onClick={handleOpen} className="bg-orange-500 px-5 py-2 sm:px-10 sm:py-4 hover:bg-white hover:text-orange-500    ">Add note</button>
    </div>
    {
        isOpen == true ? <Form  close={handleClose}  /> : ""
        
        
    }
    </div>
}





export default Header