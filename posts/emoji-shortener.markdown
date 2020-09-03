---
title: An emoji URL-shortener
date:   2020-08-19 
excerpt_separator: <!--more-->
draft: true
---

This is a little write up of a very small project I did, inspired by the coding train on youtube/twitch:  
a URL-shortener that uses a sequences of emojis to encode each URL.  
The code is available on [github](https://github.com/lucblassel/emoji-shortener), and you can try it out at [emojis.lucblassel.com](http://emojis.lucblassel.com). 

<!--more-->

### What are the different components in this project?
- MongoDB database to store shortened URLs
- Backend API to do CRUD operations on DB
- Frontend that submits HTTP requests to API

### How did I implement it? 
- express for the API
- Atlas for DB
- VUe for frontend (not mine) 
- Boostrap styling

### Conclusion
- It's goign to change
- not entirely funcitonal because of security reasons (I don't want phishing...)
