require('dotenv').config();

const express = require('express');
// This is a require module syntax
// import express from 'express'
// This is an import module syntax. Both of these are valid in Node.js
// The above line is a CommonJS module syntax, while the below line is an ES module syntax.
const app = express();
const port = 4000;
// This here is a port. A computer, in the context of TCP/IP networking, can have 65,535 virtual ports. These ports are numbered from 0 to 65535 and are used to identify different network services or applications on a computer. 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('SakshamModi2805');
})

app.get('/login', (req, res)=> {
    res.send('<h1>Please Login at Chai aur Code</h1>')
})
app.get('/youtube', (req, res)=>{
    res.send('<h2>Saksham Modi</h2>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
// DON'T FORGET TO USE '/' WHILE DEFINING THE ROOT URL IN THE app.get() FUNCTION.
// DON'T FORGET TO USE '/' IN THE URL WHEN YOU ARE TRYING TO ACCESS THE ROOT URL.

//  Before, when we were just doing a console.log() in index.js then what happened is when we did npm run start, then only the console.log() was executed and then index.js was terminated. But now, as we included the functionalities of express in our index.js (here, get, listen), we see that as we did npm run start, the server started and it is listening on post 3000. So, now the index.js file is not terminated. It is still running in the background and listening for requests on port 3000. So, if we go to our browser and type localhost:3000, we will see the Hello World! message. This is because the server is still running and it is listening for requests on port 3000. So, when we type localhost:3000 in our browser, it sends a request to the server and the server responds with the Hello World! message.

// When I first wrote the code for login, I saw that after saving the file and going to the browser, I was not able to see the message. This is because I had not restarted the server. So, if you make any changes in your code, you have to restart the server for the changes to take effect.This is known as the "hot reload" feature. This is a very tedious process. You have to go to the terminal and press Ctrl + C to stop the server and then run npm run start again to start the server again. This is a very tedious process and it can be very time consuming if you are making a lot of changes in your code. So, this is not a good way to do it. You have to manually restart the server every time you make a change in your code.
// But there is a way to avoid this. We can use nodemon. Nodemon is a utility that automatically monitors for any changes in your source and automatically restarts your server. So, you don't have to manually restart your server every time you make a change in your code. To install nodemon, we can use the command npm install -g nodemon. The -g flag means that we are installing nodemon globally on our system. So, we can use it in any project. After installing nodemon, we can use it instead of node to run our index.js file. So, instead of using npm run start, we can use nodemon index.js to run our index.js file.


// The cloud services where I can upload my production bundle are: 
// 1) aws
// 2) azure
// 3) google cloud
// 4) heroku
// 5) vercel
// 6) netlify
// 7) railway
// 8) render
// 9) fly.io
// 10) digital ocean
// 11) cloudflare
// 12) linode
// 13) vultr
// 14) upcloud
// 15) oracle cloud
// 16) IBM cloud
// 17) Alibaba cloud
// 18) Tencent cloud
// 19) cyclic

// Now what was the issue due to which these services became paid was that people started using these free-services for crypto mining which lead to a large number of problems, so now they are just giving free credits to the users. So, if you are a new user, you will get free credits for a limited time. After that, you have to pay for the services. So, these services are not completely free. They are paid services but they do have free tiers. So, you can use them for free for a limited time. After that, you have to pay for the services.