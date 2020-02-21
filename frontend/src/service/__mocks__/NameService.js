
const getNameService = jets.fn()

const putNameService = jest.fn()
putNameService.mockReturnValue(200)

export {getNameService}

export {putNameService}
