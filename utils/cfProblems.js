const axios = require('axios');

const codeforces = async (apiAddress) => {
    var problems = []        
    
    try{
            let response = await axios.get(apiAddress)
            console.log(response.data) //****console log statement****
            if(response.data.status == "OK"){
                const ques = response.data.result.problems
                for(var i=0; i<ques.length; ++i){
                    problems.push({
                       contestId: ques[i].contestId,
                       name: ques[i].name,
                       rating: ques[i].rating,
                       index: ques[i].index,
                       url: 'https://codeforces.com/problemset/problem/'+ ques[i].contestId + '/' + ques[i].index,
                       source: 'codeforces' 
                    }) 
                }
            }else{
                throw new Error('Unable to fetch problems from Codeforces')
            }
    }catch(error){
        throw new Error(error)
    }

    return problems         
}

module.exports = codeforces