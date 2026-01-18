const express = require('express')
const axios = require('axios')
const client = require('./client')
const app = express()

//normal app.get method without caching... cons -> hits an api everytime the request is made, response time is bigger
// app.get('/', async(req,res) =>{
//     const {data} = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
//     return res.json(data);
// })


//using caching, firstly make sure the redis server is active and the client is imported
app.get('/', async(req,res) =>{
    if(cachedValue) return res.json(JSON.parse(cachedValue))

    const {data} = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
    return res.json(data);

    await client.set('posts', JSON.stringify(data)); //cached here
    await client.expire('posts', 30);
    return res.json(data);
})

app.listen(3000)