




 async function getDataAPI() {
    
         
          
      try {
        const response = await fetch('data.json')
        if(response.status === 200) {
            return response
        }

        
      } catch (error) { 
      
      throw error}
        
        
             
            


}


export default getDataAPI;

