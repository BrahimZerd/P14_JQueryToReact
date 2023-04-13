


function Modal ({className,style,text,close}) {
   
    
    return (
        
        
        <div id="modalOverlay" style={{display:"none"}}>
        <div className={className} style={style}id="modal">
            <span>{text}</span>
            <button onClick={close}>Close</button>
        </div>
        
        </div>
       
    )

}

export default Modal;