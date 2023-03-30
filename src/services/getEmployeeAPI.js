

const initialState = {}


export  async function getDataAPI() {
    
         
          
     
        const promise =  await fetch('data.json')
        .then(result => {
          if (result.status === 200){
            return result
          } else {
            throw result
          }
          
        },
        
        )
        return promise


        

        
         


         
         
         

       
        
      
        
        
             
            


}




