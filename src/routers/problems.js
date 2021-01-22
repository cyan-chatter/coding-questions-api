const express = require('express')
const router = new express.Router()

const getProblems = require('../../utils/problemsThrower')

const routeHandler = {
    
    loadProblemsTopics : async (req,res)=>{
        const topics = [
            'dp',
            'greedy',
            'divide and conquer',
            'data structures',
        ]
        res.send(topics)
    },
    
    loadProblemsList : async (req,res)=>{
        const topic = req.params.topic
        const problems = await getProblems(topic)   
        res.send(problems)
    }
}

router.get('/problems/:topic',routeHandler.loadProblemsList)
router.get('/problems',routeHandler.loadProblemsTopics)



module.exports = router
