



async function getApi () {

    const result = await fetch('http://localhost:3000/data.json')
    .then(response =>  {return response.json()})

    return result
    
}



export default getApi;