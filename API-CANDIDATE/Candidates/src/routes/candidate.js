const router = require('express').Router()
const candidate = require('../models/candidates')
const Scores = require('../models/test')


router.post('/api/candidate/create',async(req,res)=>{

    const {name,email,address} = req.body

    if(!name || !email || !address){
        return res.status(400).json({messege:"plese provide all required detailes(name,email,address)"})
    }

    const candidateExist = await candidate.findOne({email:email}).lean()
    if(candidateExist){
       return res.status(409).json({messege:"email exist already"})
    }

    const user = await candidate.create({name,email,address})

    res.status(200).json({
        messege:"user created sucessfully",
        details:user
    })
 
})


router.post('/api/candidate/test',async(req,res)=>{

    const {id} = req.query
    const{first_round, second_round, third_round} = req.body

   //checking id correct or not
    if(!id) return res.status(400).json({messege:"plese provide candidate id for assigning test scores"})

    try {
       var user = await candidate.findOne({_id:id})
    } catch (error) {
        return res.status(400).json({messege:"user id invalid"})
    }
    
    //checking errors
    if(!first_round || !second_round || !third_round) {
        return  res.status(400).json({messege:"plese provide candidate scores in all rounds(first_round,second_round,third_round"})
    }

    try {
        await Scores.findOne({candidateId:user._id},async(err,user)=>{
            if(!user){
                const score = new Scores({
                    firstRound : first_round,
                    secondRound:second_round,
                    thirdRound : third_round,
                    candidateId:id
                })
            
                await score.save()
            
                return  res.status(200).json({messege:"sucessfully creadted scores in all rounds",details:score})
            }
            user.firstRound=first_round,
                user.secondRound=second_round,
                user.thirdRound=third_round
                await user.save()
                return  res.status(200).json({messege:"sucessfully updated scores"})
        });

    } catch (e) {
        console.log(e)
    }
   

   

})


router.get('/api/candidate/highScore',async(req,res)=>{

    const All = await Scores.find({})
    // console.log(All)

    const s = All.map(item=>({
                 "Totel-score" :item.firstRound+item.secondRound+item.thirdRound,
                 "Candidate_id"      :item.candidateId
                })
    )

    const highScorer = s.sort()

    res.status(200).json({messege:"highest scoring candidate",details:s[0]})

})


router.get('/api/candidate/averageScore',async(req,res)=>{

    const All = await Scores.find({})
    // console.log(All)

    const s = All.map(item=>({
                 "Candidate_id"      :item.candidateId,
                 "FirstRound-score" :item.firstRound,
                 "SecondRound-score":item.secondRound,
                 "ThirdRound-score":item.thirdRound,
                })
    )

    res.status(200).json({messege:"average scores for all candidates",details:s})

})




module.exports = router