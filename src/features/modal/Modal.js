import { useState } from "react";



function Modal (Element) {
    const [modalIsOpen, setIsOpen] = useState(true);
  
     function openModal() {
      setIsOpen(false);
      
    }
   function SetModal () {
    return( 
        <button onClick={openModal}>Ouvrir</button>
    )
   }
    
  
    function closeModal() {
      setIsOpen(true);
    }

     Element = () =>  {
        setIsOpen(false)
    }
    
    return (
        
        modalIsOpen ? 
        <div className='Modal'>
           <SetModal />
            </div>: 
        <div className='ModalOpen'>
            <span>Employee Successfully</span>
            <button onClick={closeModal}>Close Modal</button>
        </div>
        
       
    )

}

export default Modal;