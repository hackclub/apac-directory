const axios = require('axios')
const {parse} = require('node-html-parser')

const scrapbook_exists = async (username) => {

const res = await axios.get(`https://scrapbook.hackclub.com/${username}`)
const htmlDoc= parse(res.data, 'text/html')
const titleValue =  htmlDoc.getElementsByTagName('title')[0].innerText

return titleValue.includes('404')
}

module.exports = scrapbook_exists;