



/** @function getDataAPI function link to the data to use the dispatch mecanism with a fetch */

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




