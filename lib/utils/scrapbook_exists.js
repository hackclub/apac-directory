const axios = require('axios')
const {parse} = require('node-html-parser')

const scrapbook_exists = async (username) => {


const res = await axios.get(`https://scrapbook.hackclub.com/${username}`)
const htmlDoc= parse(res.data, 'text/html')
try{
const titleValue =  htmlDoc.getElementsByTagName('title')[0].innerText

return !titleValue.includes('404')}
catch(err){
    console.log('error happened for');
    console.log('username =>',username);
    console.log('res',htmlDoc);
}
}

module.exports = scrapbook_exists;