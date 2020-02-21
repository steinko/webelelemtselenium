import {getNameService} from './NameService'
import {putNameService} from './NameService'

describe('testing api', () => {

  beforeEach(() => {
    fetch.resetMocks()
  })
 
  it('should resturn name', async () => {
    fetch.mockResponseOnce(JSON.stringify({ name: 'Bjørn' }))
    expect(await getNameService()).toEqual('Bjørn')
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:9090')
  })

  it('should send name', async () => {
    fetch.mockResponseOnce(200)
    const response = await putNameService('Bjørn')
    expect(response).toEqual(200)
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(
       'http://localhost:9090',
        {method: 'PUT',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify({name:'Bjørn'}) 
        })   
       })
  })
