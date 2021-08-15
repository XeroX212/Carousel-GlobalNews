const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async(req, res) => {
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
        res.render('index', { articles : newsAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('index', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('index', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('index', { articles : null })
            console.error('Error', err.message)
        }
    } 
})

module.exports = newsRouter 