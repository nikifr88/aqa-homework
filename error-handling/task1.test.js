const axios = require("axios");

async function getUserInvalid() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/postss')
                            .catch(function(error) {
                                if(error.response) {
                                    const errors = [error.response.status, error.response.data]
                                    return errors;
                                } else if (error.request) {
                                    console.log(error.request);
                                } else {
                                    console.log('Error', error.message);
                                }
                                console.log(error.config);
                            })

    return response
}

test('Invalid getUser request', async () => {
    const response = await getUserInvalid();

    expect(response[0]).toBe(404);
    expect(JSON.stringify(response[1])).toBe('{}');
})