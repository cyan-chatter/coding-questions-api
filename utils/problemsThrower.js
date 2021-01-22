const codeforces = require('./cfProblems')

const problemsThrower = async(topic)=>{

    var problems = []
    
    const cfAPI = 'https://codeforces.com/api/problemset.problems?&tags=' + topic
    try{
        const response = await codeforces(cfAPI)
        for(var i=0; i<response.length; ++i){
            problems.push(response[i])
        }
    }
    catch(error){
        console.log(error)//****console log statement****
    }
    
    return problems
}

module.exports = problemsThrower
