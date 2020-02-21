export  async function getNameService() {
    const respons= await fetch('http://localhost:9090')
    const result = await respons.json()
    return result.name
}

export async function putNameService(name){ 
    const data = { name: name}
    const response = await fetch('http://localhost:9090',
    {  method: 'PUT',
       headers: { 'Content-Type': 'application/json'},
       body: JSON.stringify(data) 
    })
    return await response.status; 
}