const client = require('./client'); // require the redis client  


async function init(){
    await client.set('msg:6', 'NodeJS_REDIS') //redis set function 
    const result = await client.get("user:2") // redis get function 
    // await client.expire('user:2',5) //setting expiry on key in redis data
    console.log("Result ->", result)
}

init(); //do not forget this