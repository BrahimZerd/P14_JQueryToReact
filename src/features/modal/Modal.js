


function Modal ({className,text,close}) {
   
    
    
    return (
        
        
        
        <div className={className}>
            <span>{text}</span>
            <button onClick={close}>Close Modal</button>
        </div>
        
       
    )

}

export default Modal;