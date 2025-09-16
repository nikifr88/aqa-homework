const {
  placeHolderAPI
} = require("./APIEnv");

test("Get all posts", async () => {
  console.log('Get all posts')
  const response = await placeHolderAPI.get("/posts")

  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
  expect(response.data.length === 100).toBeTruthy();
})

test("Get all comments", async () => {
  console.log('Get all comments')
  const response = await placeHolderAPI.get("/comments")

  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
  expect(response.data.length === 500).toBeTruthy();
})

test("Post one post", async () => {
  console.log('Post one post')
  const response = await placeHolderAPI.post("/posts", {
    title: 'Cool post',
    body: 'Very cool info',
    userId: 1
  })

  expect(response.status).toBe(201);
  expect(response.data).toBeDefined();
  expect(response.data.body).toMatch(/Very cool info/);
})

test("Post one comment", async () => {
  console.log('Post one comment')
  const response = await placeHolderAPI.post("/comments", {
    name: 'Igor',
    email: 'example@email.com',
    body: 'Cool Comment',
    postId: 22
  })

  expect(response.status).toBe(201);
  expect(response.data).toBeDefined();
  expect(response.data.body).toMatch(/Comment/);
})

test("Get comment by postId", async () => {
  console.log('Get comment by postId')
  const response = await placeHolderAPI.get('/comments?postId=22')

  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
  expect(response.data[0].postId).toBe(22);
});