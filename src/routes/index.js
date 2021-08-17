const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async(req, res) => {
    try {
        const GlobalNewsAPI = await axios.get(`https://globalnews.ca/gnca-ajax-redesign/sample-data/`)
        res.render('index', { cards : GlobalNewsAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('index', { cards : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('index', { cards : null })
            console.log(err.requiest)
        } else {
            res.render('index', { cards : null })
            console.error('Error', err.message)
        }
    } 
})

module.exports = newsRouter 