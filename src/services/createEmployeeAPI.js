



async function createEmployeeAPI(newEmployee) {

        const response = await fetch('/data.json', 
        {
            method: "POST",
            body: JSON.stringify(newEmployee)
        })

        .then(response => response.json())
        .then(response => console.log(response))

        console.log(response)


}


export default createEmployeeAPI;