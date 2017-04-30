# Chucknorris quotes

[![Build Status](https://travis-ci.org/muhtarudinsiregar/chucknorris-quotes.svg?branch=master)](https://travis-ci.org/muhtarudinsiregar/chucknorris-quotes) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/97153fe3d94c44edb672df5b1d6b5359)](https://www.codacy.com/app/muhtarudinsiregar/chucknorris-quotes?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=muhtarudinsiregar/chucknorris-quotes&amp;utm_campaign=Badge_Grade)

## Installation
`yarn add chucknorris-quotes`
or
`npm install chucknorris-quotes`

## Usage
```javascript
const cq = require("chucknorris-quotes");

// get random joke
cq.getRandomJoke().then((response) => {
    console.log(response.data);
});
```

## API

### getRandomJoke
```js
cq.getRandomJoke().then((response) => {
    console.log(response.data);
    //=>{ "type": "success", "value": { "id": 467, "joke": "Chuck Norris can delete the Recycling Bin.", "categories": ["nerdy"] } }
});
```
### getRandomJokes(number)
### getCategories
### getNumberOfJokes

## Reference

http://www.icndb.com/api/
