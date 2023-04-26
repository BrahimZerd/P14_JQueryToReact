

/** @function createEmployeeAPI function link to the data to use the dispatch mecanism with a fetch */
async function createEmployeeAPI(newEmployee) {
  
  const promise =  await fetch('data.json')
  
  .then(result => {
    if (result.status === 200){
     return result
    } else {
      throw result
    }
    
  },
  
  )
  
  .then(result =>result.json())
  .then(result => {
    result.push(newEmployee)
      return result
  })
  

}


export default createEmployeeAPI;