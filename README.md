node-socket
---
# Installation  
`$ npm install`  
`$ node index.js`  

# Usage

http://localhost:3000/  

# NPM

[![NPM](https://nodei.co/npm/express.png?downloads=true&stars=true)](https://www.npmjs.com/package/express)  
[![NPM](https://nodei.co/npm/socket.io.png?downloads=true&stars=true)](https://www.npmjs.com/package/socket.io)   

# Cloud9

> c9.io →  Repositories → Clone to edit  

https://ide.c9.io
```bash
jacobhsu:~/workspace (master) $ npm i

```
c9users.io/ was loaded over HTTPS  
> You should always use the HTTPS jQuery CDN reference

`$ npm install`  
`$ node index.js`   

https://node-socket-jacobhsu.c9users.io/

# Heroku

.git config add
```
[remote "heroku"]
    url = https://git.heroku.com/jacob-node-socket.git
    fetch = +refs/heads/*:refs/remotes/heroku/*
```
Procfile  
`web: node index.js`

Deploy using Heroku Git  
`$ heroku login`  
`$ git push heroku master`  

http://jacob-node-socket.herokuapp.com/

# Note
```
request(change_btn)  index.js(node)                index.html
   |
   +--------------->  'change'      +------------>'index_get_response'
                         |          |                 |
                       next         |                next
                         |          |                 |
                         v          |                 v
               'index_get_response'-+          $("body").css("background-color", '#XXXXXX');
```
# References

* [Getting Started](http://socket.io/get-started/chat/)
* [Writing a Node.js App](https://community.c9.io/t/writing-a-node-js-app/1731)
* [Cloud9](https://c9.io/)- Your development environment, in the cloud
* [Heroku](https://www.heroku.com/) : Cloud Application Platform
* [bootstrap_modal](http://www.w3schools.com/bootstrap/bootstrap_modal.asp)
* [getbootstrap css](http://getbootstrap.com/css/)
* [Components · Bootstrap](http://getbootstrap.com/components/)
