const axios = require("axios");

const BASE_URL = 'https://qauto.forstudy.space/api';
const email = Date.now() + 'test@example.com';
const password = 'Qwertyasda12345';
let globalSid;

async function postAuthSignup(email, password) {
    const response = await axios.post(`${BASE_URL}/auth/signup`, {
        "name": "Johnasddasd",
        "lastName": "Douassdas",
        email,
        password,
        "repeatPassword": password
    })
    
    return response;
}

async function getCarBrandById() {
    const authReq = await postAuthSignup(email, password);

    globalSid = authReq.headers['set-cookie'][0].split(';')[0];

    const response = await axios.get(`${BASE_URL}/cars/brands/2`, {
        headers: {
            cookie: authReq.headers['set-cookie'][0].split(';')[0]
        }
    })

    return response;
}

test('Get car have correct headers and parameters', async () => {
    const response = await getCarBrandById();

    expect(response.config.headers.cookie).toBe(globalSid);
    expect(response.config.url).toMatch("/cars/brands/2");
})