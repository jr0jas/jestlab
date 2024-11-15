const axios = require('axios');

test('should fetch data from API', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
});
