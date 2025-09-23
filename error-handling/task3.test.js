const axios = require("axios");

jest.mock("axios");

test('Fake correct request', async () => {
    const okData = {id: 555, name: 'Ivan'};
    axios.get.mockResolvedValue({data: okData});

    const response = await axios.get('dhfhgfdlgjdlfkg');

    expect(response.data).toEqual(okData)
})

test('Fake incorrect request', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'))

    expect(axios.get('sdfvbcewscvxw')).rejects.toThrow('Network Error')
})