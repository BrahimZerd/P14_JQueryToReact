



async function createEmployeeAPI(newEmployee) {
    
    const obj = JSON.parse(newEmployee, (key, value) => {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    });
    
        const response = await fetch('/data.json', 
        {
            method: "POST",
            header: {
                'Accept':'application/json',
                'Content-Type': 'application/json'

            },
            body: obj
        })

        const result = await response.json()

        console.log(result)


}


export default createEmployeeAPI;