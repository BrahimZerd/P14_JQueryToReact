

/** @function getApi is a useless fonction in production dev, used to show the data with mocked data and using the pagination */

async function getApi () {

    const result = await fetch('http://localhost:3000/data.json')
    .then(response =>  {return response.json()})

    return result
    
}



export default getApi;